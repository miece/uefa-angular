'use strict';

angular.module('f1FeederApp', [
  'f1FeederApp.services',
  'f1FeederApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when("/leagues", {templateUrl: "partials/leagues.html", controller: "LeagueController"}).
    when("/german", {templateUrl: "partials/german.html", controller: "GermanTeamsController"}).
    when("/leagues/:id", {templateUrl: "partials/teams.html", controller: "TeamsController"}).
    otherwise({redirectTo: '/leagues'});
}]);
