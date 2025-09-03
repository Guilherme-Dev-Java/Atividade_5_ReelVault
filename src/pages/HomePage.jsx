import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MovieRow from '../components/MovieRow.jsx'
import Spinner from '../components/Spinner.jsx'
import ErrorAlert from '../components/ErrorAlert.jsx'
import Recommendations from '../components/Recommendations.jsx'
import { fetchPopular, fetchGenres, fetchByGenre } from '../services/tmdb.js'
import { useFavorites } from '../context/FavoritesContext.jsx'

export default function HomePage() {
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { favorites } = useFavorites()

  useEffect(() => {
    let active = true
    async function load() {
      try {
        const genresRes = await fetchGenres()
        const popular = await fetchPopular(1)
        const topGenres = (genresRes.genres || []).slice(0, 5)
        const genresMovies = await Promise.all(topGenres.map(g => fetchByGenre(g.id, 1)))
        const data = [
          { title: 'Populares', movies: popular.results },
          ...topGenres.map((g, i) => ({ title: g.name, genreId: g.id, movies: genresMovies[i].results.map(m => ({ ...m, genre_names: [g.name] })) }))
        ]
        if (active) setSections(data)
      } catch (e) { if (active) setError('Erro ao carregar filmes.') } finally { if (active) setLoading(false) }
    }
    load(); return () => active = false
  }, [])

  if (loading) return <Spinner />
  if (error) return <ErrorAlert message={error} />

  return (
    <div>
      {favorites && favorites.length > 0 && <Recommendations favorites={favorites} />}
      {sections.map(s => (
        <section key={s.title} className='mb-8'>
          <MovieRow
            title={
              s.genreId ? (
                <Link to={`/genero/${s.genreId}`} className="hover:text-accent">
                  {s.title}
                </Link>
              ) : (
                <Link to="/populares" className="hover:text-accent">
                  {s.title}
                </Link>
              )
            }
            movies={s.movies}
          />
        </section>
      ))}

    </div>
  )
}
