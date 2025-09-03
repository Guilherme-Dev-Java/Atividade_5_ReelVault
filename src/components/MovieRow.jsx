import React, { useRef } from 'react'
import MovieCard from './MovieCard.jsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function MovieRow({ title, movies }) {
  const ref = useRef(null);
  const scroll = (dir) => {
    if (!ref.current) return;
    const w = ref.current.clientWidth * 0.8;
    ref.current.scrollBy({ left: dir === "next" ? w : -w, behavior: "smooth" });
  };
  if (!movies || movies.length === 0) return null;
  return (
    <section className="mb-8 relative">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("prev")}
            className="p-2 bg-surface hover:bg-card transition rounded"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("next")}
            className="p-2 bg-surface hover:bg-card transition rounded"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div
        ref={ref}
        className="flex overflow-x-auto gap-4 scrollbar-hide pb-2"
      >
        {movies.map((m) => (
          <div key={m.id} className="min-w-[180px] max-w-[200px]">
            <MovieCard movie={m} />
          </div>
        ))}
      </div>
    </section>
  );
}

