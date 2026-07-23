// Thin client for the dev-only /api/claude/generate proxy (see vite-plugins/apiMiddleware.js).
// Keeps the Anthropic API key server-side — this file never sees it.

export async function generateWithClaude({ system, prompt, schema, maxTokens }) {
  const response = await fetch('/api/claude/generate', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ system, prompt, schema, maxTokens }),
  })

  const data = await response.json()
  if (!response.ok) {
    throw new Error(data?.error || 'Content generation failed.')
  }
  return schema ? data.result : data.text
}
