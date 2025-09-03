import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard.jsx'
import Pagination from '../components/Pagination.jsx'
import Spinner from '../components/Spinner.jsx'
import ErrorAlert from '../components/ErrorAlert.jsx'
import { search } from '../services/tmdb.js'

export default function SearchPage() {
  const [params, setParams] = useSearchParams()
  const q = params.get('query') || ''
  const page = parseInt(params.get('page') || '1', 10)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [movies, setMovies] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!q || q.length < 2) return
    setLoading(true); setError(null)
    search(q, page).then(d => { if (d.results) { setMovies(d.results); setTotal(d.total_results || 0) } else { setMovies([]); setError(d.status_message || 'Nenhum resultado') } }).catch(() => setError('Erro ao buscar')).finally(() => setLoading(false))
  }, [q, page])

  const goto = (p) => setParams({ query: q, page: String(p) })

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Resultados para "{q}"</h2>
      {loading && <Spinner />}
      {error && <ErrorAlert message={error} />}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {movies.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
      {total > 0 && <Pagination current={page} total={Math.ceil(total / 20)} onPage={goto} />}
    </div>
  )
}
