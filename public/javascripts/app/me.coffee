require.config({

   baseUrl: '/javascripts',
   waitSeconds: 30,
   shim: {

     'underscore': {
       exports: '_'
     },
     'bootstrap':{
       deps: ['jquery']
     },
     'noty':{
       deps: ['jquery']
     },
     'noty-top':{
       deps: ['noty']
     },
     'noty-topCenter':{
       deps: ['noty']
     },
     'noty-default':{
       deps: ['noty']
     }



   },
   paths: {
     'bootstrap': 'bootstrap',
     'jquery': 'jquery-1.10.2.min',
     'rails': 'rails',
     'masonry':'masonry.pkgd.min',
     'underscore': 'underscore-min',
     'noty': 'noty/jquery.noty',
     'noty-top': 'noty/layouts/top',
     'noty-topCenter': 'noty/layouts/topCenter',
     'noty-default': 'noty/themes/default'

   }
});

require ['jquery', 'underscore','bootstrap','noty','noty-top','noty-topCenter','noty-default'], ($,_) ->