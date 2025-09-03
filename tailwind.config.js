export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: '#0B0F14',   // background base
        surface: '#111827',  // navbar / sections
        card: '#0F172A',     // cards
        primary: '#E5E7EB',  // main text
        secondary: '#9CA3AF',// subtle text
        accent: '#F59E0B',   // amber
        accent2: '#10B981',  // emerald
        accent3: '#FB7185',  // rose
      },
      fontFamily: { sans: ['Raleway', 'sans-serif'] },
      boxShadow: {
        'glow': '0 0 0 0 rgba(245,158,11,0), 0 0 20px 2px rgba(245,158,11,0.25)'
      }
    }
  },
  plugins: [],
}
