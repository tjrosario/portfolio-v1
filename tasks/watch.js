module.exports = {
  options: {
    livereload: true
  },
  css: {
    files: ["scss/**/*"],
    tasks: ["scsslint:all", "sass"]
  },
  //js: {
    //files: ["scripts/**/*", "tasks/**/*"],
    //tasks: ["uglify:development"]
  //},
  images: {
    files: ["images/**/*"],
    tasks: ["copy:images"]
  }
};
