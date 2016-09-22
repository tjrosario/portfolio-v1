module.exports = {
  options: {
    livereload: true
  },
  css: {
    files: ["scss/**/*"],
    tasks: ["scsslint:all", "sass"]
  },
  js: {
    files: ["scripts/**/*", "tasks/**/*"],
    tasks: ["uglify"]
  },
  images: {
    files: ["images/**/*"],
    tasks: ["copy:images"]
  },
  assets: {
    files: ["assets/**/*"],
    tasks: ["copy:assets"]
  },
  data: {
    files: ["data/**/*"],
    tasks: ["copy:data"]
  }
};
