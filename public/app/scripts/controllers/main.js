'use strict';

angular.module('journey.controllers', [])
  .controller('MainCtrl', function ($scope, journeyService) {

    // Set up pick lists
    $scope.stations = journeyService.getTubeStations();

    $scope.days = [
      'today',
      'tomorrow'
    ];

    $scope.times = [
      {display: '7:00 pm', raw: '1900'},
      {display: '8:00 pm', raw: '2000'},
      {display: '9:00 pm', raw: '2100'},
      {display: '10:00 pm', raw: '2200'},
      {display: '11:00 pm', raw: '2300'}
    ];
  });
