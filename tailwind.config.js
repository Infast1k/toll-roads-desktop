/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-color': 'var(--background-color)',
        'foreground-color': 'var(--foreground-color)',
        'border-color': 'var(--border-color)',
        'text-color': 'var(--text-color)',
        'primary-color': 'var(--primary-color)',
        'primary-hover-color': 'var(--primary-hover-color)'
      }
    }
  },
  plugins: []
}
