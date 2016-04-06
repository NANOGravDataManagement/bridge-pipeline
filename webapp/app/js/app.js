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
  when('/mostrecent', {
    templateUrl: 'partials/mostrecent.html',
    controller: '59698Controller'
  }).
  when('/CW', {
    templateUrl: 'partials/CW.html',
    controller: '59698Controller'
  }).
  when('/introduction', {
    templateUrl: 'partials/introduction.html',
    controller: '59698Controller'
  }).
  when('/about', {
    templateUrl: 'partials/about.html',
    controller: 'AboutController'
  }).
  when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'AboutController'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);
