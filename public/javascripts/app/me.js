// Generated by CoffeeScript 1.6.3
(function() {
  require.config({
    baseUrl: '/javascripts',
    waitSeconds: 30,
    shim: {
      'underscore': {
        exports: '_'
      },
      'bootstrap': {
        deps: ['jquery']
      },
      'noty': {
        deps: ['jquery']
      },
      'noty-top': {
        deps: ['noty']
      },
      'noty-topCenter': {
        deps: ['noty']
      },
      'noty-default': {
        deps: ['noty']
      }
    },
    paths: {
      'bootstrap': 'bootstrap',
      'jquery': 'jquery-1.10.2.min',
      'bootstrap-switch': 'bootstrap-switch',
      'rails': 'rails',
      'masonry': 'masonry.pkgd.min',
      'underscore': 'underscore-min',
      'noty': 'noty/jquery.noty',
      'noty-top': 'noty/layouts/top',
      'noty-topCenter': 'noty/layouts/topCenter',
      'noty-default': 'noty/themes/default'
    }
  });

  require(['jquery', 'underscore', 'bootstrap', 'noty', 'noty-top', 'noty-topCenter', 'noty-default', 'bootstrap-switch'], function($, _) {
    $('a[name="delete-link"]').click(function() {
      var postId;
      postId = $(this).attr('data-id');
      return $('#post-id').val(postId);
    });
    $('#confirm-delete-btn').click(function() {
      var token;
      token = $('meta[name="csrf-token"]').attr('content');
      $('#authenticity_token').val(token);
      return $('#delete-post-form').submit();
    });
    return $('.make-switch').on('switch-change', function(e, data) {
      var params, postId, publish, token;
      publish = $(this).bootstrapSwitch('status');
      token = $('meta[name="csrf-token"]').attr('content');
      postId = $(this).attr('data-id');
      console.log('published: ' + publish);
      params = {
        authenticity_token: token,
        id: postId,
        published: publish
      };
      return $.ajax({
        type: 'POST',
        url: '/posts/published',
        data: params,
        dataType: 'json',
        success: function() {}
      });
    });
  });

}).call(this);
