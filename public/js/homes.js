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
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit.",
            url: "https://s-media-cache-ak0.pinimg.com/736x/47/b9/7e/47b97e62ef6f28ea4ae2861e01def86c.jpg"
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
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit.",
            url: "http://www.kumariland.com/wp-content/uploads/2016/06/ClickHandler.ashx_.jpeg"
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
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit.",
            url: "https://s-media-cache-ak0.pinimg.com/originals/0e/d4/4b/0ed44b46ad8ba4e3ef2189e1d5094393.jpg"
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
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit.",
            url: "http://houseplansandmore.com/images/071S-0032.StunningHomeExteriors.jpg"
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
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit.",
            url: "https://i.ytimg.com/vi/aHaf475oPjM/maxresdefault.jpg"
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
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit.",
            url: "http://ww2.hdnux.com/photos/60/04/00/12599329/3/rawImage.jpg"
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
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit.",
            url: "http://www.howardmodels.com/pr-house-homes-illustrations/brookstone/Home-Rendering.jpg"
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
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit.",
            url: "https://s-media-cache-ak0.pinimg.com/originals/54/96/f3/5496f30a1cbc28f689a0fad6b3cf4a69.jpg"
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
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit.",
            url: "http://bymasterbankruptcy.com/wp-content/uploads/2015/02/certified-home-inspection-company.jpg"
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
            " little maintenance. This home is move-in ready. You can enjoy the fenced in backyard with fire pit.",
            url: "http://cdn.homedsgn.com/wp-content/uploads/2013/02/a-house-20-800x481.jpg"
        }
    ];

    $scope.openTemplate = function(idx) {
        dataHandoff.objectInQueue = $scope.homeList[idx];
        $location.path('/home');
    }
})