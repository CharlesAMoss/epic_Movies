var flicks = angular.module('flicks', ['ui.router']);

flicks.config(function($stateProvider) {

    $stateProvider.state('home', {
        url: '',
        views: {
            'header': {
                templateUrl: 'partials/header.html',
            },
            'body': {
                templateUrl: 'partials/welcome.html',

            }
        }
    });

    $stateProvider.state('reviews', {
        url: '/reviews',
        views: {
            'header': {
                templateUrl: 'partials/header.html',
            },
            'body': {
                templateUrl: 'partials/reviews.html',
                controller: 'ReviewsCtrl'
            },

        }
    });

    $stateProvider.state('reviews.review', {
        url: '/:reviewId',
        views: {
            'header': {
                templateUrl: 'partials/header.html',
            },
            'body': {
                templateUrl: 'partials/reviews.html',
                controller: 'ReviewsCtrl'
            },
            'content': {

                templateUrl: 'partials/review.html',
                controller: 'ReviewCtrl'
            }
        }
    });

});
