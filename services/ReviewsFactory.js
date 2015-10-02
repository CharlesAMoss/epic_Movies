flicks.factory('ReviewsFactory', function ReviewsFactory(){
    var factory = {};
    factory.reviews = [];

    factory.reviews = [{
        title: "This is Spinal Tap is still better than most movies",
        body: ""
    },
    {
        title: "The Princes bride: The unreachable peak of quality",
        body: ""
    }];

    factory.addReview = function() {
        factory.reviews.push({
            title: factory.reviewTitle,
            skill: factory.reviewBody,
            id: factory.reviews.length + 1
        });
        factory.reviewTitle = null;
        factory.reviewBody = null;
    };

    return factory;
});
