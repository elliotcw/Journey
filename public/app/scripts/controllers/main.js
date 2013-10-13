'use strict';

angular.module('journey.controllers', [])
  .controller('MainCtrl', function ($scope, journeyService) {

    $scope.journey = {};

    // Set up pick lists
    $scope.stations = journeyService.getTubeStations();

    var days = [];
    days.length = 2;

    $scope.days = _.map(days, function (day, i) {
      var displayText = (i) ? 'today' : 'tomorrow';
      return {name: displayText, raw: moment().add('days', i).format('YYYYMMDD')};
    });

    var hours = [];
    hours.length = 24;

    $scope.hours = _.map(hours, function (day, i) {
      return {name: moment('1989-03-24').add('hours', i).format('hh:mm a'), raw: moment('1989-03-24').add('hours', i).format('HHmm')};
    });

    $scope.getJourneyInfo = function () {

      var journeyRequest = {
        origin: $scope.form.origin.$viewValue,
        destination: $scope.form.origin.$viewValue,
        day: _.find($scope.days, {name: $scope.form.day.$viewValue}).raw,
        by: _.find($scope.hours, {name: $scope.form.by.$viewValue}).raw
      };

      journeyService.getJourneyInfo(journeyRequest)
        .success(function (data) {
          console.log(data);
        })
        .error(function (error) {
          console.log(error);
        });
    };
  });
