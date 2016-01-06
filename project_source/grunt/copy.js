module.exports = {
  dist: {
    expand: true,
    cwd: '/',
    src: [
      '**/*',
      '!src/**'
    ],
    dest: 'dist'
  }
};
