var app = angular.module('legacy.home', [
    'handoff.svc'
]);

app.controller('homeController', function($scope, dataHandoff) {
    $scope.home = dataHandoff.objectInQueue;
})