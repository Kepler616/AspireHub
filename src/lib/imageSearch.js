// Thin client for the dev-only /api/images/* proxies (see vite-plugins/apiMiddleware.js).
// Keeps the Pexels/Unsplash keys server-side.

async function search(source, query) {
  const response = await fetch(`/api/images/${source}?query=${encodeURIComponent(query)}`)
  const data = await response.json()
  if (!response.ok) {
    throw new Error(data?.error || `${source} search failed.`)
  }
  return data.photos
}

export function searchPexels(query) {
  return search('pexels', query)
}

export function searchUnsplash(query) {
  return search('unsplash', query)
}
