'use strict';

Parse.initialize('n42JAqtw5FUsJQb3UwBBNOrnueDo1dlImGbmk89N', 'NF0USFiBZUTsPPGyyucJcXVKS20eqhKdDqZAShcV');

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
    'ui.bootstrap',
    'cereal.pages',
    'cereal.users',
    'cereal.prompts'
  ])
  .config(function ($routeProvider){//}, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider
      .otherwise({
        redirectTo: '/login'
      });
  })
