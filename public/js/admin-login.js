var app = angular.module('adminLogin', []);

app.controller('adminLoginController', function($scope) {
    $('.welcome-header, .footer-wrapper').hide();
    var validateAdminLoginForm = function() {
        alert('success!')
    }

    $scope.message = 'admin login'
})