var flicks = angular.module('flicks', ['ui.router']);

jobBoard.config(function($stateProvider) {

    $stateProvider.state('home', {
        url: '',
        views: {
            'header': {
                templateUrl: 'partials/header.html',
            },
            'body': {
                templateUrl: 'partials/body.html',

            }
        }
    });

    $stateProvider.state('', {
        url: '',
        views: {
            'header': {
                templateUrl: 'partials/header.html',
            },
            'body': {
                templateUrl: 'partials/freelancers.html',
                controller: 'FreelancersCtrl'
            }
        }
    });

});
