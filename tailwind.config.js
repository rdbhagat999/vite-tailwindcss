module.exports = {
  purge: {
    // enabled: true,
    content: [
    "./src/**/*.{html,css,js,ts,jsx,tsx,svelte,astro}",
    ],
    options: {
      // purgeCss options
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headline: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#f2c0f2',
          DEFAULT: '#dda0dd',
          dark: '#a243a2',
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
