/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        display: ['Josefin Sans', 'IBM Plex Sans', 'sans-serif'],
        body: ['IBM Plex Sans', 'Helvetica', 'sans-serif'],
      },
    },
    colors: {
      'light-gray': '#ECEDE8',
      white: '#ffffff',
      black: '#000000',
      beige: '#E8B78B',
      brown: '#37322A',
      'light-brown': '#877E70',
      'medium-brown': '#A99E8C',
      'near-black': '#12161B',
    },
    transitionTimingFunction: {
      butter: 'cubic-bezier(0.2, 0.8, 0, 1)',
    },
  },

  plugins: [],
};
