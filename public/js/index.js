var app = angular.module('legacy', [
    'ngRoute',
    'legacy.welcome',
    'legacy.about',
    'legacy.homes',
    'legacy.home',
    'legacy.contact',
    'handoff.svc'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/welcome'
    }).otherwise({
        redirectTo: '/welcome'
    });

    $routeProvider.when('/welcome', {
        templateUrl: 'public/views/templates/welcome.tpl.html',
        controller: 'welcomeController'
    });

    $routeProvider.when('/about', {
        templateUrl: 'public/views/templates/about.tpl.html',
        controller: 'aboutController'
    });

    $routeProvider.when('/homes', {
        templateUrl: 'public/views/templates/homes.tpl.html',
        controller: 'homesController'
    });

    $routeProvider.when('/home', {
        templateUrl: 'public/views/templates/home.tpl.html',
        controller: 'homeController'
    });

    $routeProvider.when('/contact', {
        templateUrl: 'public/views/templates/contact.tpl.html',
        controller: 'contactController'
    });
})