var myApp = angular.module('myApp', [
  'ngRoute',
  'bridgeControllers',
  'ui.bootstrap',
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/analysis', {
    templateUrl: 'partials/analysis.html',
    controller: 'AnalysisController'
  }).
  when('/help', {
    templateUrl: 'partials/help.html',
    controller: 'HelpController'
  }).
  when('/59698', {
    templateUrl: 'partials/59698.html',
    controller: '59698Controller'
  }).
  when('/mostrecent', {
    templateUrl: 'partials/mostrecent.html',
    controller: '59698Controller'
  }).
  when('/about', {
    templateUrl: 'partials/about.html',
    controller: 'AboutController'
  }).
  when('/test', {
    templateUrl: 'partials/test.html',
    controller: 'testCont'
  }).
  otherwise({
    redirectTo: '/analysis'
  });
}]);
