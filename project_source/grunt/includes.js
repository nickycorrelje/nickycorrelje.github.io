module.exports = {
  dev: {
    cwd: '<%= cfg.src %>/templates',
    src: ['*.html'],
    dest: '<%= cfg.tmp %>/',
    options: {
      flatten: true
    }
  },
  dist: {
    cwd: '<%= cfg.src %>/templates',
    src: ['*.html'],
    dest: '<%= cfg.dist %>/',
    options: {
      flatten: true
    }
  }
};
