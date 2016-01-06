module.exports = {
  dist: {
    options: {
      optimizationLevel: 3,
      progressive: true
    },
    files: [{
      expand: true,
      cwd: '<%= cfg.src %>/<%= cfg.images %>/',
      src: ['**/*.{png,jpg,gif,svg}'],
      dest: '<%= cfg.dist %>/<%= cfg.images %>/'
    }]
  }
};
