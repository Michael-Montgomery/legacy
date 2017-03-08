var app = angular.module('legacy.homes', []);


app.controller('homesController', function($scope) {
    $scope.homes = {};

    $scope.homeList = [
        {
            monthlyRate: 800,
            city: 'Melbourne',
            state: 'FL'
        },
        {
            monthlyRate: 2000,
            city: 'Indialantic',
            state: 'FL'
        },
        {
            monthlyRate: 775,
            city: 'Palm Bay',
            state: 'FL'
        },
        {
            monthlyRate: 900,
            city: 'Eau Gallie',
            state: 'FL'
        },
        {
            monthlyRate: 850,
            city: 'Melbourne',
            state: 'FL'
        },
        {
            monthlyRate: 800,
            city: 'Melbourne',
            state: 'FL'
        },
        {
            monthlyRate: 2000,
            city: 'Indialantic',
            state: 'FL'
        },
        {
            monthlyRate: 775,
            city: 'Palm Bay',
            state: 'FL'
        },
        {
            monthlyRate: 900,
            city: 'Eau Gallie',
            state: 'FL'
        },
        {
            monthlyRate: 850,
            city: 'Melbourne',
            state: 'FL'
        }
    ];

    $scope.openTemplate = function(idx) {
        alert($scope.homeList[idx].monthlyRate)
    }
})