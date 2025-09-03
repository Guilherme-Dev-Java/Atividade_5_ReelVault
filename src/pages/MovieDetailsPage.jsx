import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovie, image } from '../services/tmdb.js'
import Spinner from '../components/Spinner.jsx'
import ErrorAlert from '../components/ErrorAlert.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'

export default function MovieDetailsPage() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { toggleFavorite, favorites } = useFavorites()

  useEffect(() => {
    let active = true
    async function load() {
      try {
        const data = await fetchMovie(id)
        if (!active) return
        if (data && data.id) setMovie(data)
        else setError('Filme não encontrado')
      } catch (e) { if (active) setError('Erro ao carregar filme') } finally { if (active) setLoading(false) }
    }
    load(); return () => active = false
  }, [id])

  if (loading) return <Spinner />
  if (error) return <ErrorAlert message={error} />
  if (!movie) return null

  const isFav = favorites.some(f => f.id === movie.id)
  const poster = image(movie.poster_path, 'w500')

  return (
    <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-6 p-6'>
      <img src={poster} alt={movie.title} className='w-full rounded shadow-lg' />
      <div>
        <h1 className='text-3xl font-bold'>{movie.title} <span className='text-secondary'>({(movie.release_date || '').slice(0, 4)})</span></h1>
        <p className='mt-2 text-sm text-secondary'>{movie.genres?.map(g => g.name).join(', ')} • {movie.adult ? '18+' : 'Livre'}</p>
        <p className='mt-4'>{movie.overview}</p>
        <div className='mt-4 space-y-1 text-sm'>
          <p><strong>Diretor:</strong> {movie.credits?.crew?.find(c => c.job === 'Director')?.name || '—'}</p>
          <p><strong>Elenco:</strong> {movie.credits?.cast?.slice(0, 6).map(c => c.name).join(', ')}</p>
          <p><strong>Nota:</strong> {movie.vote_average}</p>
        </div>
        <div className='mt-6 flex gap-3'>
          <button onClick={() => toggleFavorite(movie)} className='px-4 py-2 rounded bg-accent hover:opacity-90 shadow-glow'>{isFav ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}</button>
        </div>
      </div>
    </div>
  )
}
