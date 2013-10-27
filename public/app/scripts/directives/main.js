'use strict';

angular.module('journey.directives', [])
  .filter('slice', function () {
    return function (arr, start, end) {
      if (arr.length > (end - start)) {
        return arr.slice(start, end);
      } else {
        return arr;
      }
    };
  })
  .directive('choices', function () {
    return {
      templateUrl: 'views/choices.html',
      replace: false,
      restrict: 'AE',
      scope: {
        choices: '=',
        ngModel: '=',
        show: '='
      },
      link: function (scope, element, attrs) {

 
        scope.$watch('ngModel', function (newValue) {
          _.each(scope.choices, function (choice) {
            choice.selected = (choice.name === newValue);
          });
        });

        scope.close = function () {
          scope.show = false;
        };

        scope.choose = function (selectedChoice) {
          scope.ngModel = selectedChoice.name;
          _.each(scope.choices, function (choice) {
            choice.selected = (choice === selectedChoice);
          });
        };

        scope.chooseAndClose = function (selectedChoice) {
          scope.choose(selectedChoice);
          scope.close();
        };

        scope.from = 0;
        scope.to = 4;

        element.on('keydown', function (e) {
          scope.$apply(function () {
            if (e.keyCode === 13) {
              scope.close();
            } else if (e.keyCode === 38) {
              if (scope.from > 0) {
                scope.from -= 1;
                scope.to -= 1;
              }
            } else if (e.keyCode === 40) {
              if (scope.to < scope.choices.length){
                scope.from += 1;
                scope.to += 1;
              }
            }
          });
        });
      }
    };
  })
  .directive('focusOn', function () {
    return {
      link: function(scope, element, attrs) {
        attrs.$observe('focusOn', function (shouldFocus) {
          if (shouldFocus) {
            element.get(0).focus();
          }
        });
      }
    };
  });