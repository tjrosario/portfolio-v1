module.exports = {
  "default": [],
  lint: ['scsslint:all'],
  dev: [
    "lint",
    "uglify",
    "sass",
    "copy", 
    "notify", 
    "watch"
  ]
};
