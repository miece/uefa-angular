'use strict';

angular.module('f1FeederApp.controllers', []).
controller('GermanTeamsController', function($scope, ergastAPIservice) {
  $scope.nameFilter = null;
  $scope.teamsList = [];
  $scope.searchFilter = function(teams) {
    var re = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || re.test(teams.name);
  };

  ergastAPIservice.getGermanTeams().success(function(response) {
    $scope.teamsList = response.standing;
  });
}).

controller('DriverController', function($scope, $routeParams, ergastAPIservice) {
  $scope.id = $routeParams.id;
  $scope.races = [];
  $scope.driver = null;

  ergastAPIservice.getDriverDetails($scope.id).success(function(response) {
    $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
  });

  ergastAPIservice.getDriverRaces($scope.id).success(function(response) {
    $scope.races = response.MRData.RaceTable.Races;
  });
});



