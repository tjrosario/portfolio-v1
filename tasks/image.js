module.exports = {
  dynamic: {
    files: [
      {
        expand: true,
        cwd: 'images/',
        src: ['**/*.{png,jpg,gif,svg}'],
        dest: 'dist/images/'
      }
    ]
  }
};
