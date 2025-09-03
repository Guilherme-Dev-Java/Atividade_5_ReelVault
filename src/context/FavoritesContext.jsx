import React, { createContext, useContext, useEffect, useState } from 'react'
const FavoritesContext = createContext()
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])
  useEffect(() => { const s = localStorage.getItem('favorites'); if (s) setFavorites(JSON.parse(s)) }, [])
  useEffect(() => { localStorage.setItem('favorites', JSON.stringify(favorites)) }, [favorites])
  const toggleFavorite = (movie) => { setFavorites(prev => { if (!movie) return prev; const exists = prev.find(f => f.id === movie.id); return exists ? prev.filter(f => f.id !== movie.id) : [...prev, movie] }) }
  return <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>{children}</FavoritesContext.Provider>
}
export const useFavorites = () => useContext(FavoritesContext)
