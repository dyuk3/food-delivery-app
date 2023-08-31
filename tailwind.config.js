/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        rest: 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      gridTemplateRows: {
        rest: 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [],
};
