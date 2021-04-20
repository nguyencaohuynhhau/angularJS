
weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
    
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;
    
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    
    console.log($scope.weatherResult);
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }
    
    
}]);
