flicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, ReviewsFactory, UtilitiesFactory){
    $scope.reviews = ReviewsFactory.reviews;
    $scope.ReviewsFactory = ReviewsFactory;
});
