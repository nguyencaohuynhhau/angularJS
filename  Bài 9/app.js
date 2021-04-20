var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
    })
    .when("/second", {
      templateUrl: "pages/second.html",
      controller: "secondController",
    })
    .when("/second/:num", {
      templateUrl: "pages/second.html",
      controller: "secondController",
    });
});

myApp.directive("searchResult", function () {
  return {
    template: `
    <div class="list-group">
    <a href="#" class="list-group-item">
      <h4 class="list-group-item-heading">Hoa le</h4>
      <p class="list-group-item-text">59 lang ha</p>
    </a>
  </div>`,
    replace: true,
    restrict: "AE",
  };
});

myApp.service("nameService", function () {
  var self = this;
  this.name = "Hoa le";

  this.nameLength = function () {
    return self.name.length;
  };
});

myApp.controller("mainController", [
  "$scope",
  "$log",
  "nameService",
  function ($scope, $log, nameService) {
    $scope.name = nameService.name;
    $log.log(nameService.name);
    $log.log(nameService.nameLength());

    $scope.$watch("name", function () {
      nameService.name = $scope.name;
    });
  },
]);
myApp.controller("secondController", [
  "$scope",
  "$routeParams",
  "$log",
  "nameService",
  function ($scope, $routeParams, $log, nameService) {
    $scope.name = nameService.name;
    $log.log(nameService.name);
    $log.log(nameService.nameLength());
  },
]);

var resultLinkHref = "#";
