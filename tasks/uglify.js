module.exports = {
  app: {
    options: {
      mangle: false,
      compress: false,
      beautify: false
    },
    files: {
      "dist/scripts/app.js": [
        "node_modules/jquery/dist/jquery.js",
        "node_modules/owl.carousel/dist/owl.carousel.min.js",
        "node_modules/babel-browser-transform/dist/babel-browser-transform.js",
        "node_modules/react/dist/react.js",
        "node_modules/react-dom/dist/react-dom.js",
        "node_modules/remarkable/dist/remarkable.js",
        "scripts/app.js"
      ]
    }
  }
};
