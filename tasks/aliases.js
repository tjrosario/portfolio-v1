module.exports = {
  "default": [],
  lint: ['scsslint:all'],
  build: [
    "lint",
    "uglify",
    "sass",
    "copy", 
    "notify", 
  ],
  dev: [
    "build",
    "watch"
  ]
};
