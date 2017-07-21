angular.module('salesApp.templates', ['ngRoute']) 
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider/*.otherwise({redirectTo: '/view1'});*/
  .when('/templates', {
      templateUrl: 'templates/templates.html',
      controller: 'TemplatesCtr'
  });
}])
.controller('TemplatesCtr', ['$scope',function($scope){
    console.log('TemplatesCtr init');
    console.log($scope);
}]);