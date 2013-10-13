'use strict';

angular.module('journey.directives', [])
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

        scope.choose = function (selectedChoice) {
          scope.ngModel = selectedChoice.name;
          scope.show = false;
          _.each(scope.choices, function (choice) {
            choice.selected = (choice === selectedChoice);
          });
        };
      }
    };
  });