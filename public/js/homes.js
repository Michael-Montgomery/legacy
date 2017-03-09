var app = angular.module('legacy.homes', [
    'handoff.svc'
]);


app.controller('homesController', function($scope, dataHandoff, $location) {
    $scope.homes = {};

    $scope.homeList = [
        {
            monthlyRate: 800,
            city: 'Melbourne',
            state: 'FL',
            bedrooms: 3,
            baths: 2,
            squareFootage: 1776,
            description: "This is an Adorable 3 bedroom, 2 bath home located in the heart of Port Orange... Not too " +
            "far from beaches, rivers, or springs. 10 min drive to Port Orange's Pavilion for your dining and shopping " +
            "pleasure. An hour drive to Orlando. The home was built in 2006 so you will enjoy the newer construction with" +
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit."
        },
        {
            monthlyRate: 2000,
            city: 'Indialantic',
            state: 'FL',
            bedrooms: 5,
            baths: 3,
            squareFootage: 4400,
            description: "This is an Adorable 3 bedroom, 2 bath home located in the heart of Port Orange... Not too " +
            "far from beaches, rivers, or springs. 10 min drive to Port Orange's Pavilion for your dining and shopping " +
            "pleasure. An hour drive to Orlando. The home was built in 2006 so you will enjoy the newer construction with" +
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit."
        },
        {
            monthlyRate: 775,
            city: 'Palm Bay',
            state: 'FL',
            bedrooms: 3,
            baths: 2,
            squareFootage: 2000,
            description: "This is an Adorable 3 bedroom, 2 bath home located in the heart of Port Orange... Not too " +
            "far from beaches, rivers, or springs. 10 min drive to Port Orange's Pavilion for your dining and shopping " +
            "pleasure. An hour drive to Orlando. The home was built in 2006 so you will enjoy the newer construction with" +
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit."
        },
        {
            monthlyRate: 900,
            city: 'Eau Gallie',
            state: 'FL',
            bedrooms: 3,
            baths: 1,
            squareFootage: 1367,
            description: "This is an Adorable 3 bedroom, 2 bath home located in the heart of Port Orange... Not too " +
            "far from beaches, rivers, or springs. 10 min drive to Port Orange's Pavilion for your dining and shopping " +
            "pleasure. An hour drive to Orlando. The home was built in 2006 so you will enjoy the newer construction with" +
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit."
        },
        {
            monthlyRate: 850,
            city: 'Melbourne',
            state: 'FL',
            bedrooms: 3,
            baths: 1,
            squareFootage: 1367,
            description: "This is an Adorable 3 bedroom, 2 bath home located in the heart of Port Orange... Not too " +
            "far from beaches, rivers, or springs. 10 min drive to Port Orange's Pavilion for your dining and shopping " +
            "pleasure. An hour drive to Orlando. The home was built in 2006 so you will enjoy the newer construction with" +
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit."
        },
        {
            monthlyRate: 800,
            city: 'Melbourne',
            state: 'FL',
            bedrooms: 3,
            baths: 1,
            squareFootage: 1367,
            description: "This is an Adorable 3 bedroom, 2 bath home located in the heart of Port Orange... Not too " +
            "far from beaches, rivers, or springs. 10 min drive to Port Orange's Pavilion for your dining and shopping " +
            "pleasure. An hour drive to Orlando. The home was built in 2006 so you will enjoy the newer construction with" +
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit."
        },
        {
            monthlyRate: 2000,
            city: 'Indialantic',
            state: 'FL',
            bedrooms: 3,
            baths: 1,
            squareFootage: 1367,
            description: "This is an Adorable 3 bedroom, 2 bath home located in the heart of Port Orange... Not too " +
            "far from beaches, rivers, or springs. 10 min drive to Port Orange's Pavilion for your dining and shopping " +
            "pleasure. An hour drive to Orlando. The home was built in 2006 so you will enjoy the newer construction with" +
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit."
        },
        {
            monthlyRate: 775,
            city: 'Palm Bay',
            state: 'FL',
            bedrooms: 3,
            baths: 1,
            squareFootage: 1367,
            description: "This is an Adorable 3 bedroom, 2 bath home located in the heart of Port Orange... Not too " +
            "far from beaches, rivers, or springs. 10 min drive to Port Orange's Pavilion for your dining and shopping " +
            "pleasure. An hour drive to Orlando. The home was built in 2006 so you will enjoy the newer construction with" +
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit."
        },
        {
            monthlyRate: 900,
            city: 'Eau Gallie',
            state: 'FL',
            bedrooms: 3,
            baths: 1,
            squareFootage: 1367,
            description: "This is an Adorable 3 bedroom, 2 bath home located in the heart of Port Orange... Not too " +
            "far from beaches, rivers, or springs. 10 min drive to Port Orange's Pavilion for your dining and shopping " +
            "pleasure. An hour drive to Orlando. The home was built in 2006 so you will enjoy the newer construction with" +
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit."
        },
        {
            monthlyRate: 850,
            city: 'Melbourne',
            state: 'FL',
            bedrooms: 3,
            baths: 1,
            squareFootage: 1367,
            description: "This is an Adorable 3 bedroom, 2 bath home located in the heart of Port Orange... Not too " +
            "far from beaches, rivers, or springs. 10 min drive to Port Orange's Pavilion for your dining and shopping " +
            "pleasure. An hour drive to Orlando. The home was built in 2006 so you will enjoy the newer construction with" +
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit."
        }
    ];

    $scope.openTemplate = function(idx) {
        dataHandoff.objectInQueue = $scope.homeList[idx];
        $location.path('/home');
    }
})