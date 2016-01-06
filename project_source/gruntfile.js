module.exports = function(grunt) {

  'use strict';

  require('time-grunt')(grunt);

  var config = {
    tmp: 'tmp',
    src: 'src',
    stylesheets: 'stylesheets',
    javascripts: 'javascripts',
    images: 'images',
    templates: 'templates',
    dist: '../'
  };

  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json'),
      cfg: config
    }
  });

  grunt.registerTask('default', [
    'less:dev',
    'includes:dev',
    'jshint',
    'connect',
    'watch'
  ]);

  grunt.registerTask('dist', [
    'less:dist',
    'includes:dist',
    'jshint',
    'requirejs:dist',
    'imagemin:dist'
  ]);
};
