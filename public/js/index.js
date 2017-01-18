var app = angular.module('legacy', [
    'ngRoute',
    'legacy.welcome',
    'legacy.about'
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
    })
})