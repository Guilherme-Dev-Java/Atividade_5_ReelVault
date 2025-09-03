import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard.jsx'
import Spinner from '../components/Spinner.jsx'
import ErrorAlert from '../components/ErrorAlert.jsx'
import Pagination from '../components/Pagination.jsx'
import { fetchByGenre } from '../services/tmdb.js'

export default function GenrePage() {
  const { genreId } = useParams()
  const [params, setParams] = useSearchParams()
  const page = parseInt(params.get('page') || '1', 10)
  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    async function load() {
      setLoading(true)
      try {
        const data = await fetchByGenre(genreId, page)
        if (!active) return
        setMovies(data.results || [])
        setTotalPages(data.total_pages || 1)
      } catch (e) { if (active) setError('Erro ao carregar filmes.') } finally { if (active) setLoading(false) }
    }
    load(); return () => active = false
  }, [genreId, page])

  const goto = (p) => setParams({ page: String(p) })

  if (loading) return <Spinner />
  if (error) return <ErrorAlert message={error} />

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Gênero</h2>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
        {movies.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
      <Pagination current={page} total={Math.min(totalPages, 500)} onPage={goto} />
    </div>
  )
}
