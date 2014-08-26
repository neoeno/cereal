angular.module('cereal.pages', [
  'ngRoute',
  'parse-angular'
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
