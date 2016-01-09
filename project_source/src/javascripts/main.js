requirejs.config({
  paths: {
    'jquery': '../../node_modules/jquery/dist/jquery',
    'underscore': '../../node_modules/underscore/underscore',
    'panelsnap': '../../node_modules/jquery-panelsnap/jquery.panelsnap'
  },

  map: {
    '*': {
      '_': 'underscore',
      '$': 'jquery'
    }
  },

  shim: {
    'panelsnap': ['$']
  },
});

define(function(require) {
  'use strict';

  require('$');
  require('panelsnap');

  var mijnwerk = require('content/mijnwerk');

  $(document).ready(initialize);

  function initialize() {
    mijnwerk.initialize();

    $('body').panelSnap({
      panelSelector: '.page-section',
      delay: 0,
      $menu: $('.navigation-list'),
      onSnapFinish: mijnwerk.close
    });
  }
});
