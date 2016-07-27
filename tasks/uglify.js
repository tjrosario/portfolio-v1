module.exports = {
  development: {
    options: {
      mangle: false,
      compress: false,
      beautify: false
    },
    files: {
      "dist/scripts/app.js": [
        "node_modules/jquery/dist/jquery.js",
        "node_modules/owl.carousel/dist/owl.carousel.min.js",
        "scripts/main.js"
      ]
    }
  }
};
