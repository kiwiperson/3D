require.config({

    baseUrl: '/javascripts',
    waitSeconds: 60,
    shim: {

        'underscore': {
            exports: '_'
        },
        'masonry':{
            deps: ['jquery']
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
        },
        'tip':{
            deps: ['jquery']
        },

        'three':{
            exports:'THREE'
        },
        'three-fullscreen':{
            deps: ['three']
        },
        'three-screenshot':{
            deps: ['three']
        },

        'lzma':{
            deps: ['three']
        },
        'ctm':{
            deps: ['three']
        },
        'CTMLoader':{
            deps: ['three']
        },
        'BinaryLoader':{
            deps: ['three']
        },
        'OBJLoader':{
            deps: ['three']
        },
        'VTKLoader':{
            deps: ['three']
        },
        'STLLoader':{
            deps: ['three']
        },
        'ColladaLoader':{
            deps: ['three']
        },
        'UTF8Loader':{
            deps: ['three']
        },
        'MTLLoader':{
            deps: ['three']
        },
        'OrbitControls-Touch':{
            deps: ['three']
        }
    },
    paths: {
        'bootstrap': 'bootstrap',
        'jquery': 'jquery-1.10.2.min',
        'jquery.spin': 'jquery.spin',
        'rails': 'rails',
        'three':'three',
        'underscore': 'underscore-min',
        'noty': 'noty/jquery.noty',
        'noty-top': 'noty/layouts/top',
        'noty-topCenter': 'noty/layouts/topCenter',
        'noty-default': 'noty/themes/default',
        'tip' : 'app/tip',
        'masonry':'masonry.pkgd.min',
        'bootstrap-switch': 'bootstrap-switch',

        "jquery.ui.widget": "fileupload/vendor/jquery.ui.widget",
        "jquery.iframe-transport":"fileupload/jquery.iframe-transport",
        "jquery.fileupload":"fileupload/jquery.fileupload",

        'three-fullscreen':'THREEx.FullScreen',
        'three-screenshot':'THREEx.screenshot',
        'orbitControls':'OrbitControls',
        'lzma':'loaders/ctm/lzma',
        'ctm':'loaders/ctm/ctm',
        'CTMLoader':'loaders/ctm/CTMLoader',
        'BinaryLoader':'loaders/BinaryLoader',
        'OBJLoader':'loaders/OBJLoader',
        'VTKLoader':'loaders/VTKLoader',
        'STLLoader':'loaders/STLLoader',
        'ColladaLoader':'loaders/ColladaLoader',
        'UTF8Loader':'loaders/UTF8Loader',
        'MTLLoader':'loaders/MTLLoader',
        'OrbitControls-Touch':'OrbitControls-Touch'
    }
});
