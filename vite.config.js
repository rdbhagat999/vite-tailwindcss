// vite.config.js
export default {
  build: {
    // generate manifest.json in outDir
    manifest: false,
    rollupOptions: {
      // overwrite default .html entry
      input: './index.html'
    }
  }
}
