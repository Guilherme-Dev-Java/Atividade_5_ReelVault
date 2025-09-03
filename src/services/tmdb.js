const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const LANG = import.meta.env.VITE_DEFAULT_LANG || 'pt-BR'
const BASE = 'https://api.themoviedb.org/3'
const image = (path, size = 'w500') => path ? `https://image.tmdb.org/t/p/${size}${path}` : ''

export async function fetchPopular(page = 1) {
  const res = await fetch(`${BASE}/movie/popular?api_key=${API_KEY}&language=${LANG}&page=${page}`)
  return res.json()
}

export async function fetchGenres() {
  const res = await fetch(`${BASE}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`)
  return res.json()
}

export async function fetchByGenre(genreId, page = 1) {
  const res = await fetch(`${BASE}/discover/movie?api_key=${API_KEY}&language=${LANG}&with_genres=${genreId}&page=${page}`)
  return res.json()
}

export async function fetchMovie(id) {
  const res = await fetch(`${BASE}/movie/${id}?api_key=${API_KEY}&language=${LANG}&append_to_response=credits`)
  return res.json()
}

export async function search(query, page = 1) {
  const res = await fetch(`${BASE}/search/movie?api_key=${API_KEY}&language=${LANG}&query=${encodeURIComponent(query)}&page=${page}`)
  return res.json()
}

export { image }
