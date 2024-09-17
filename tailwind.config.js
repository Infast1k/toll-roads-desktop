/** @type {import('tailwindcss').Config} */
export const content = ['./src/renderer/**/*.{js,ts,jsx,tsx}']
export const theme = {
  extend: {
    colors: {
      'background-color': 'var(--background-color)',
      'foreground-color': 'var(--foreground-color)',
      'border-color': 'var(--border-color)',
      'border-exception-color': 'var(--border-exception-color)',
      'text-color': 'var(--text-color)',
      'primary-color': 'var(--primary-color)',
      'primary-hover-color': 'var(--primary-hover-color)'
    }
  }
}
export const plugins = []
