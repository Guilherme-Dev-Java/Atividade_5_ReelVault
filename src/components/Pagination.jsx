import React from 'react'
export default function Pagination({ current, total, onPage }) {
  if (total <= 1) return null
  return (
    <div className='flex justify-center items-center gap-3 mt-6'>
      <button onClick={() => onPage(current - 1)} disabled={current === 1} className='px-3 py-1 rounded bg-surface hover:bg-card transition disabled:opacity-50'>Anterior</button>
      <span className='text-sm text-neutral-300'>{current} / {total}</span>
      <button onClick={() => onPage(current + 1)} disabled={current === total} className='px-3 py-1 rounded bg-surface hover:bg-card transition disabled:opacity-50'>Próxima</button>
    </div>
  )
}
