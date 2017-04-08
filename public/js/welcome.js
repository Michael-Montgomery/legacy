var app = angular.module('legacy.welcome', []);

app.controller('welcomeController', function($scope, $location) {
    document.title = 'Legacy Property Management Group';
    $(window).scroll(function() {
        if($(window).scrollTop() == 0) {
            $('.welcome-header').css('background-color', 'transparent');
        } else {
            $('.welcome-header').css('background-color', 'black');
        }
    })
    $scope.goToAbout = function() {
        $location.path('/about')
    }

    $scope.goToHomes = function() {
        $location.path('/homes')
    }
})