'use strict';

angular.module('journey.directives', [])
  .directive('popoutChoice', function () {
    return {
      templateUrl: 'views/popoutChoice.html',
      replace: true,
      restrict: 'E',
      scope: {
        things: '=',
        choice: '='
      },
      link: function (scope, element, attrs) {
        console.log(scope);
        scope.choose = function (choice) {
          scope.choice = choice;
        };
      }
    };
  });