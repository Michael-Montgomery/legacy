var app = angular.module('legacy', [
    'ngRoute',
    'legacy.welcome'
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
    })
})