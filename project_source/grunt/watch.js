module.exports = {
  less: {
    files: [
      '<%= cfg.src %>/<%= cfg.stylesheets %>/**/*'
    ],
    tasks: [
      'less:dev'
    ],
    options: {
      spawn: false
    }
  },
  javascript: {
    files: [
      '<%= cfg.src %>/<%= cfg.javascripts %>/**/*'
    ],
    tasks: [
      'jshint'
    ]
  },
  templates: {
    files: [
      '<%= cfg.src %>/<%= cfg.templates %>/**/*'
    ],
    tasks: [
      'includes:dev'
    ]
  }
};
