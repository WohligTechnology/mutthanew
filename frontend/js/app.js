// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'ui.swiper'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })
        //  .state('footer', {
        //   url: "/",
        //   templateUrl: "views/template.html",
        //   controller: 'FooterCtrl'
        // })
        .state('know', {
            url: "/know",
            templateUrl: "views/template.html",
            controller: 'KnowCtrl'
        })
        .state('careers', {
            url: "/careers",
            templateUrl: "views/template.html",
            controller: 'CareersCtrl'
        })
        .state('client', {
            url: "/client",
            templateUrl: "views/template.html",
            controller: 'ClientCtrl'
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "views/template.html",
            controller: 'ContactCtrl'
        })
        // .state('media', {
        //   url: "/media",
        //   templateUrl: "views/template.html",
        //   controller: 'MediaCtrl'
        // })
        .state('project', {
            url: "/project/:id",
            templateUrl: "views/template.html",
            controller: 'ProjectCtrl'
        })
        // .state('projects', {
        //     url: "/projects/6",
        //     templateUrl: "views/template.html",
        //     controller: 'ProjectsCtrl'
        //   })
        .state('build', {
            url: "/build",
            templateUrl: "views/template.html",
            controller: 'BuildCtrl'
        })
        .state('give', {
            url: "/give",
            templateUrl: "views/template.html",
            controller: 'GiveCtrl'
        }).state('shantilal', {
            url: "/give/shantilal",
            templateUrl: "views/template.html",
            controller: 'ShantilalCtrl'
        })
        .state('bjs', {
            url: "/give/bjs",
            templateUrl: "views/template.html",
            controller: 'BjsCtrl'
        });
    $urlRouterProvider.otherwise("/home");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});