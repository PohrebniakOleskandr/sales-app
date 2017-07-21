angular.module('salesApp.templates', ['ngRoute']) 
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider/*.otherwise({redirectTo: '/view1'});*/
  .when('/templates', {
      templateUrl: 'templates/templates.html',
      controller: 'TemplatesCtr'
  })  
  .when('/templates/:templateId', {
      templateUrl: 'templates/template-details.html',
      controller: 'TemplateDetailsCtr'
  })
    .otherwise({redirectTo: '/templates'});
}])
.controller('TemplatesCtr', ['$scope', '$http',function($scope, $http){
    console.log('TemplatesCtr init');
    
    $http.get('json/templates.json')
        .success(function(data){
           $scope.templates = data;
        });
}])
.controller('TemplateDetailsCtr', 
    ['$scope', '$http', '$routeParams', '$filter',function($scope, $http, $routeParams, $filter){
        console.log('TemplateDetailsCtr init');
        
        var templateId = $routeParams.templateId;
        
        $http.get('json/templates.json').success(function(data){
            //$scope.templates = data;
            var filteredArr = $filter('filter')(data,function(d){
                return d.id == templateId;
            });
            $scope.template = filteredArr[0];
            $scope.mainImage = $scope.template.images[0].name;
        });

        $scope.setImage = function(img){
            $scope.mainImage =  img.name;
        }

   
}])

