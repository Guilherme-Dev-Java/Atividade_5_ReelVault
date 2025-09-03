import React from 'react'
import { useFavorites } from '../context/FavoritesContext.jsx'
import MovieCard from '../components/MovieCard.jsx'
export default function FavoritesPage() { const { favorites } = useFavorites(); return (<div><h2 className='text-2xl font-bold mb-4'>Meus Favoritos</h2>{favorites.length === 0 ? <p className='text-secondary'>Nenhum favorito ainda.</p> : (<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>{favorites.map(f => <MovieCard key={f.id} movie={f} />)}</div>)}</div>) }
