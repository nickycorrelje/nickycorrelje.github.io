var rewriteModule = require('http-rewrite-middleware');

module.exports = {
  server: {
    options: {
      useAvailablePort: true,
      middleware: function (connect, options) {
        var middlewares = [];

        middlewares.push(rewriteModule.getMiddleware([
          {from: '^/stylesheets/(.*)$', to: './tmp/stylesheets/$1'},
          {from: '^/javascripts/(.*)$', to: './src/javascripts/$1'},
          {from: '^/images/(.*)$', to: './src/images/$1'},
          {from: '^/fonts/(.*)$', to: './src/fonts/$1'},
          {from: '^/data/(.*)$', to: './src/data/$1'},
          {from: '^/node_modules/(.*)$', to: './node_modules/$1'},
          {from: '^/libs/(.*)$', to: './libs/$1'},
          {from: '^/(.*)$', to: '/tmp/index.html'}
        ]));

        if (!Array.isArray(options.base)) {
          options.base = [options.base];
        }

        options.base.forEach(function (base) {
          middlewares.push(connect.static(base));
        });

        var directory = options.directory || options.base[options.base.length - 1];
        middlewares.push(connect.directory(directory));

        return middlewares;
      }
    }
  }
};
