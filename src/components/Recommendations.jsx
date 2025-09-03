import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard.jsx'
import Spinner from './Spinner.jsx'
import { fetchByGenre } from '../services/tmdb.js'

export default function Recommendations({ favorites }) {
  const [recs, setRecs] = useState([]); const [loading, setLoading] = useState(false)
  useEffect(() => {
    let active = true; async function load() {
      if (!favorites || favorites.length === 0) { setRecs([]); return } setLoading(true)
      try {
        const g = favorites[0]?.genre_ids?.[0] || favorites[0]?.genres?.[0]?.id
        if (!g) { setRecs([]); setLoading(false); return }
        const data = await fetchByGenre(g, 1)
        if (active) setRecs(data.results || [])
      } catch (e) { if (active) setRecs([]) } finally { if (active) setLoading(false) }
    } load(); return () => active = false
  }, [favorites])
  if (loading) return <Spinner />; if (!recs || recs.length === 0) return null
  return (<section className='mb-8'><h2 className='text-xl font-bold mb-3'>Recomendações</h2><div className='flex overflow-x-auto gap-4 scrollbar-hide pb-2'>{recs.map(m => <div key={m.id} className='min-w-[180px] max-w-[200px]'><MovieCard movie={m} /></div>)}</div></section>)
}
