angular.module('cereal.pages', [
  'ngRoute'
  ]).config(function($routeProvider){
    'use strict';

    $routeProvider
      .when('/', {
        templateUrl: 'views/pages/index.html',
        controller: 'PagesIndexCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
