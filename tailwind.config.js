// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        '--heightHeader': 'var(--heightHeader)',
        '--heightBody': 'var(--heightBody)',
      },
    },
  },
  plugins: [],
}
