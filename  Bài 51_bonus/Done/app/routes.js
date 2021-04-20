// Routes
weatherApp.config(function($routeProvider){
    
    $routeProvider.when('/', {
        templateUrl: '/app/views/home.html',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: '/app/views/forecast.html',
        controller: 'forecastController'
    })
    
     .when('/forecast/:days', {
        templateUrl: '/app/views/forecast.html',
        controller: 'forecastController'
    })
    
});