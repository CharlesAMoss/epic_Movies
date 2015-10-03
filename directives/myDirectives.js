flicks.directive("nightMode", function($document) {
    return function(scope, element, attrs) {
        element.bind("click", function() {
            $document.find("body").toggleClass(attrs.nightMode);
        });
    };
});
