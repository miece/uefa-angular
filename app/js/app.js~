'use strict';

angular.module('f1FeederApp', [
  'f1FeederApp.services',
  'f1FeederApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when("/drivers", {templateUrl: "partials/drivers.html", controller: "DriversController"}).
    when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "DriverController"}).
    otherwise({redirectTo: '/drivers'});
}]);
