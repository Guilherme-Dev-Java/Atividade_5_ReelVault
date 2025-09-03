import React from 'react'
import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { image } from '../services/tmdb.js'

export default function MovieCard({ movie }) {
  const { favorites, toggleFavorite } = useFavorites()
  const isFav = favorites.some(f => f.id === movie.id)
  const poster = image(movie.poster_path)

  return (
    <div className='relative rounded overflow-hidden shadow group bg-card/80 backdrop-blur-sm min-w-[180px]'>
      <img src={poster} alt={movie.title} className='w-full h-72 object-cover' />
      <div className='absolute bottom-0 left-0 w-full bg-black/60 p-2 text-center'>
        <h3 className='text-sm font-semibold leading-tight line-clamp-2'>{movie.title}</h3>
        <p className='text-xs text-secondary'>{(movie.release_date || '').slice(0, 4)}</p>
      </div>

      <div className='absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition p-3 flex flex-col justify-between'>
        <div>
          <h3 className='text-base font-bold'>{movie.title}</h3>
          <p className='text-xs text-secondary'>{(movie.release_date || '').slice(0, 4)} {movie.genre_names ? `• ${movie.genre_names.join(', ')}` : ''} {movie.adult ? '• 18+' : ''}</p>
          {movie.overview && <p className='text-xs mt-2 line-clamp-5'>{movie.overview}</p>}
        </div>
        <div className='flex justify-between items-center mt-3'>
          <Link to={`/detalhes/${movie.id}`} className='text-accent'>Detalhes</Link>
          <div className='flex gap-2'>
            <button onClick={() => toggleFavorite(movie)} className='px-3 py-1 bg-surface rounded'>{isFav ? '💔' : '❤️'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
