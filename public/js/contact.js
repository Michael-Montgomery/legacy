var app = angular.module('legacy.contact', []);

app.controller('contactController', function($scope) {
    $scope.sendContactForm = function() {
        alert('Form Submitted!')
    }
})