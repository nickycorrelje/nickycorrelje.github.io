module.exports = {
  options: {
    jshintrc: true
  },
  all: [
    'Gruntfile.js',
    '<%= cfg.src %>/<%= cfg.javascripts %>/**/*.js'
  ]
};
