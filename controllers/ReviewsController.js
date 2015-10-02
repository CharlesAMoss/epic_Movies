flicks.controller('ReviewsCtrl', function ReviewsCtrl($scope){

    $scope.reviews = [{
        title: "This is Spinal Tap is still better than most movies",
        body: ""
    },
    {
        title: "The Princes bride: The unreachable peak of quality",
        body: ""
    }];

    $scope.addReview = function() {
        $scope.reviews.push({
            title: $scope.reviewTitle,
            skill: $scope.reviewBody,

        });
        $scope.reviewTitle = null;
        $scope.reviewBody = null;
    };



});
