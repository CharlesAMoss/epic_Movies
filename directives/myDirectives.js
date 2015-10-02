flicks.directive("nightMode", function() {
  return function (scope, element) {
    element.bind("click", function() {
      element.toggleClass("inverted");
    });
};
});
