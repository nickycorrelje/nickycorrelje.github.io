module.exports = {
  dist: {
    options: {
      baseUrl: '<%= cfg.src %>/<%= cfg.javascripts %>/',
      mainConfigFile: '<%= cfg.src %>/<%= cfg.javascripts %>/main.js',
      name: 'main',
      out: '<%= cfg.dist %>/<%= cfg.javascripts %>/main.js',
      optimize: 'uglify2',
      preserveLicenseComments: false
    }
  }
};
