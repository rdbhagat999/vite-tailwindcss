module.exports = {
  purge: {
    enabled: true,
    content: [
    "./src/**/*.{html,css,js,ts,jsx,tsx,svelte,astro}",
    ],
    options: {
      // purgeCss options
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
