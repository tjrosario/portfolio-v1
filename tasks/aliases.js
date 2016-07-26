module.exports = {
  "default": [],
  lint: ['scsslint:all'],
  dev: [
    "lint",  
    //"uglify:development", 
    "sass:dist",
    "copy", 
    "notify", 
    "watch"
  ]
};
