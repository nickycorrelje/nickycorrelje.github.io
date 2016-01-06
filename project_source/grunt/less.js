module.exports =  {
  dev: {
    files: {
      '<%= cfg.tmp %>/<%= cfg.stylesheets %>/main.css': '<%= cfg.src %>/<%= cfg.stylesheets %>/main.less'
    }
  },
  dist: {
    options: {
      compress: true,
      yuicompress: true,
      optimization: 2
    },
    files: {
      '<%= cfg.dist %>/<%= cfg.stylesheets %>/main.css': '<%= cfg.src %>/<%= cfg.stylesheets %>/main.less'
    }
  }
};
