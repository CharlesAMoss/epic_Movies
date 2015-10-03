// flicks.directive("nightMode", function() {
//   return function (scope, element, attrs) {
//     element.bind("click", function() {
//        angular.element("document.").toggleClass(attrs.changeClass);
//     });
// };
// });

flicks.directive("nightMode", function() {
  return function (scope, element) {
    angular.element("#night").bind("click", function() {
      element.toggleClass("night");
    });
};
});
