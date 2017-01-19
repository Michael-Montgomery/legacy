var app = angular.module('legacy.welcome', []);

app.controller('welcomeController', function($scope) {
    document.title = 'Legacy Property Management Group';
    $(window).scroll(function() {
        if($(window).scrollTop() == 0) {
            $('.welcome-header').css('background-color', 'transparent');
        } else {
            $('.welcome-header').css('background-color', 'black');
        }
    })
})