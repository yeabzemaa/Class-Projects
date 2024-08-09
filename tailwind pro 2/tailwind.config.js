/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./all/*.{html,js}"],
  theme: {
    borderRadius: {
      'large': '64px',
      'small':'16px'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

