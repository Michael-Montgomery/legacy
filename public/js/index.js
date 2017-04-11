var app = angular.module('legacy', [
    'ngRoute',
    'legacy.welcome',
    'legacy.about',
    'legacy.homes',
    'legacy.home',
    'legacy.contact',
    'handoff.svc',
    'adminLogin'
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

    $routeProvider.when('/admin-login', {
        templateUrl: 'public/views/templates/admin-login.tpl.html',
        controller: 'adminLoginController'
    })
});

app.controller('mainController', function($scope) {


    $scope.triggerResponsive = function() {
        if($('.welcome-header').css('height') === '70px') {
            $('.welcome-header').css({
                'height': '100vh',
                'background-color': 'black'
            });
            if($('.welcome-header').css('opacity') != '1') {
                $('.welcome-header').css('opacity', '1')
            }
        } else {
            $('.welcome-header').css('height', '70px')
        }

        $('#responsive-menu').toggle();
    }

    $scope.hideResponsive = function() {
        if($('.welcome-header').css('height') != '70px') {
            $('.welcome-header').css({
                'height': '70px',
                'background-color': 'black',
                'opacity': 1
            })
        }else {
            $('.welcome-header').css('height', '70px')
        }


        $('#responsive-menu').toggle();
    }
})