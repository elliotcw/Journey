'use strict';

angular.module('journey', ['journey.controllers', 'journey.services', 'journey.directives', 'ngRoute', 'ngAnimate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
