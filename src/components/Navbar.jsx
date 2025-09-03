import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [open, setOpen] = useState(false); const [q, setQ] = useState(''); const navigate = useNavigate(); const { t, i18n } = useTranslation()
  const submit = (e) => { e.preventDefault(); if (!q || q.trim().length < 2) return; navigate(`/buscar?query=${encodeURIComponent(q.trim())}`); setQ(''); setOpen(false) }

  return (
    <header className='bg-surface border-b border-slate-800'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Link to='/' className='flex items-center gap-2'><div className='logo-projector w-9 h-9 bg-accent rounded-full flex items-center justify-center text-primary font-bold'>RV</div><span className='text-xl font-bold'>ReelVault</span></Link>
          <nav className='hidden md:flex items-center gap-4 ml-4'><Link to='/' className='hover:text-accent'>{t('home')}</Link><Link to='/favoritos' className='hover:text-accent'>{t('favorites')}</Link></nav>
        </div>
        <form onSubmit={submit} className='flex items-center gap-2 ml-4'><input value={q} onChange={e => setQ(e.target.value)} placeholder={t('search_placeholder')} className='px-3 py-2 rounded bg-card text-primary placeholder-neutral-400 focus:outline-none' /><button type='submit' className='px-3 py-2 bg-accent rounded hover:opacity-90 shadow-glow'><Search className='w-4 h-4' /></button></form>
        <div className='hidden md:flex items-center gap-3 ml-4'><select onChange={e => i18n.changeLanguage(e.target.value)} className='bg-surface border border-cream text-primary rounded px-2 py-1'><option value='pt'>PT</option><option value='en'>EN</option></select></div>
        <button className='md:hidden' onClick={() => setOpen(!open)} aria-label='menu'>{open ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}</button>
      </div>
      {open && (<div className='md:hidden bg-surface px-4 pb-4'><div className='flex flex-col gap-3'><Link to='/' onClick={() => setOpen(false)} className='py-2'>{t('home')}</Link><Link to='/favoritos' onClick={() => setOpen(false)} className='py-2'>{t('favorites')}</Link><div className='pt-2'><select onChange={e => i18n.changeLanguage(e.target.value)} className='bg-surface border border-cream text-primary rounded px-2 py-1'><option value='pt'>PT</option><option value='en'>EN</option></select></div></div></div>)}
    </header>
  )
}
