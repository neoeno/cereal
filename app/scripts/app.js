'use strict';

/**
 * @ngdoc overview
 * @name cereal
 * @description
 * # cereal
 *
 * Main module of the application.
 */
angular
  .module('cereal', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function(){
    Parse.initialize('n42JAqtw5FUsJQb3UwBBNOrnueDo1dlImGbmk89N', 'NF0USFiBZUTsPPGyyucJcXVKS20eqhKdDqZAShcV');
  })
