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
    'cereal.pages'
  ])
  .config(function ($routeProvider){//}, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider
      .otherwise({
        redirectTo: '/pages'
      });
  })
  .run(function(){
    Parse.initialize('n42JAqtw5FUsJQb3UwBBNOrnueDo1dlImGbmk89N', 'NF0USFiBZUTsPPGyyucJcXVKS20eqhKdDqZAShcV');
  })
