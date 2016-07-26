module.exports = {
  images: {
    files: [
      {
        expand: true,
        cwd: "images/",
        src: "**",
        dest: "dist/images/"
      }
    ]
  },
  fonts: {
    files: [
      {
        expand: true,
        cwd: "fonts/",
        src: "**",
        dest: "dist/fonts/"
      }
    ]
  }
};
