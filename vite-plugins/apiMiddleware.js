import Anthropic from '@anthropic-ai/sdk'

// Dev-only backend routes injected into the Vite dev server, so secret API keys
// (Anthropic, Pexels, Unsplash) stay server-side and are never bundled into the
// browser build. Keys are read from process.env (populated from .env.local by
// Vite itself — see vite.config.js).

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      if (!data) return resolve({})
      try {
        resolve(JSON.parse(data))
      } catch (err) {
        reject(new Error(`Invalid JSON body: ${err.message}`))
      }
    })
    req.on('error', reject)
  })
}

function sendJson(res, status, body) {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.end(JSON.stringify(body))
}

async function handleClaudeGenerate(req, res) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return sendJson(res, 500, {
      error: 'ANTHROPIC_API_KEY is not set. Add it to .env.local and restart the dev server.',
    })
  }

  const { system, prompt, schema, maxTokens } = await readJsonBody(req)
  if (!prompt) {
    return sendJson(res, 400, { error: 'Missing "prompt" in request body.' })
  }

  const anthropic = new Anthropic()
  const params = {
    model: 'claude-opus-4-8',
    max_tokens: maxTokens ?? 2048,
    messages: [{ role: 'user', content: prompt }],
  }
  if (system) params.system = system
  if (schema) {
    params.output_config = { format: { type: 'json_schema', schema } }
  }

  const response = await anthropic.messages.create(params)

  if (response.stop_reason === 'refusal') {
    return sendJson(res, 422, { error: 'The model declined to generate this content. Try adjusting the request.' })
  }
  if (response.stop_reason === 'max_tokens') {
    return sendJson(res, 422, { error: 'The response was cut off before completing. Try a shorter request.' })
  }

  const textBlock = response.content.find((block) => block.type === 'text')
  if (!textBlock) {
    return sendJson(res, 500, { error: 'No text content returned from the model.' })
  }

  if (!schema) {
    return sendJson(res, 200, { text: textBlock.text })
  }

  try {
    return sendJson(res, 200, { result: JSON.parse(textBlock.text) })
  } catch (err) {
    return sendJson(res, 500, { error: `Model output did not match the expected format: ${err.message}` })
  }
}

async function handlePexelsSearch(url, res) {
  if (!process.env.PEXELS_API_KEY) {
    return sendJson(res, 500, { error: 'PEXELS_API_KEY is not set. Add it to .env.local and restart the dev server.' })
  }
  const query = url.searchParams.get('query') || 'mortgage home'
  const upstream = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=12`,
    { headers: { Authorization: process.env.PEXELS_API_KEY } },
  )
  const data = await upstream.json()
  if (!upstream.ok) {
    return sendJson(res, upstream.status, { error: data?.error || 'Pexels search failed.' })
  }
  const photos = (data.photos || []).map((photo) => ({
    id: String(photo.id),
    thumbUrl: photo.src.medium,
    fullUrl: photo.src.large2x,
    alt: photo.alt || 'Pexels photo',
    credit: photo.photographer,
    source: 'Pexels',
  }))
  return sendJson(res, 200, { photos })
}

async function handleUnsplashSearch(url, res) {
  if (!process.env.UNSPLASH_ACCESS_KEY) {
    return sendJson(res, 500, {
      error: 'UNSPLASH_ACCESS_KEY is not set. Add it to .env.local and restart the dev server.',
    })
  }
  const query = url.searchParams.get('query') || 'mortgage home'
  const upstream = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=12`,
    { headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` } },
  )
  const data = await upstream.json()
  if (!upstream.ok) {
    return sendJson(res, upstream.status, { error: data?.errors?.[0] || 'Unsplash search failed.' })
  }
  const photos = (data.results || []).map((photo) => ({
    id: photo.id,
    thumbUrl: photo.urls.small,
    fullUrl: photo.urls.regular,
    alt: photo.alt_description || 'Unsplash photo',
    credit: photo.user?.name,
    source: 'Unsplash',
  }))
  return sendJson(res, 200, { photos })
}

export default function apiMiddlewarePlugin() {
  const handle = async (req, res, next) => {
    const url = new URL(req.url, 'http://localhost')

    try {
      if (req.method === 'POST' && url.pathname === '/api/claude/generate') {
        await handleClaudeGenerate(req, res)
        return
      }
      if (req.method === 'GET' && url.pathname === '/api/images/pexels') {
        await handlePexelsSearch(url, res)
        return
      }
      if (req.method === 'GET' && url.pathname === '/api/images/unsplash') {
        await handleUnsplashSearch(url, res)
        return
      }
    } catch (err) {
      sendJson(res, 500, { error: err.message || 'Unexpected server error.' })
      return
    }
    next()
  }

  return {
    name: 'aspire-api-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url.startsWith('/api/')) return next()
        handle(req, res, next)
      })
    },
  }
}
