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
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        //  .state('footer', {
        //   url: "/",
        //   templateUrl: tempateURL,
        //   controller: 'FooterCtrl'
        // })
        .state('know', {
            url: "/know",
            templateUrl: tempateURL,
            controller: 'KnowCtrl'
        })
        .state('careers', {
            url: "/careers",
            templateUrl: tempateURL,
            controller: 'CareersCtrl'
        })
        .state('client', {
            url: "/client",
            templateUrl: tempateURL,
            controller: 'ClientCtrl'
        })
        .state('contact', {
            url: "/contact",
            templateUrl: tempateURL,
            controller: 'ContactCtrl'
        })
        // .state('media', {
        //   url: "/media",
        //   templateUrl: tempateURL,
        //   controller: 'MediaCtrl'
        // })
        .state('project', {
            url: "/project/:id",
            templateUrl: tempateURL,
            controller: 'ProjectCtrl'
        })
        // .state('projects', {
        //     url: "/projects/6",
        //     templateUrl: tempateURL,
        //     controller: 'ProjectsCtrl'
        //   })
        .state('build', {
            url: "/build",
            templateUrl: tempateURL,
            controller: 'BuildCtrl'
        })
        .state('give', {
            url: "/give",
            templateUrl: tempateURL,
            controller: 'GiveCtrl'
        }).state('shantilal', {
            url: "/give/shantilal",
            templateUrl: tempateURL,
            controller: 'ShantilalCtrl'
        })
        .state('bjs', {
            url: "/give/bjs",
            templateUrl: tempateURL,
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