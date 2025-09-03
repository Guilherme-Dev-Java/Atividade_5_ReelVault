import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import PopularPage from "./pages/PopularPage.jsx";
import HomePage from './pages/HomePage.jsx'
import GenrePage from './pages/GenrePage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import MovieDetailsPage from './pages/MovieDetailsPage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'

export default function App() {
  return (
    <FavoritesProvider>
      <div className='min-h-screen bg-carbon text-primary'>
        <Navbar />
        <main className='max-w-7xl mx-auto px-4 py-6'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/populares" element={<PopularPage />} />
            <Route path='/genero/:genreId' element={<GenrePage />} />
            <Route path='/buscar' element={<SearchPage />} />
            <Route path='/detalhes/:id' element={<MovieDetailsPage />} />
            <Route path='/favoritos' element={<FavoritesPage />} />
          </Routes>
        </main>
      </div>
    </FavoritesProvider>
  )
}
