// Directives

weatherApp.directive('weatherReport', function(){
   
    return {
        restrict: 'E',
        templateUrl: '/app/views/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
    
});