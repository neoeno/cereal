angular.module('cereal.pages', [
  'ngRoute',
  'ngSanitize',
  'parse-angular',
  'diff',
  'btford.markdown'
  ]).config(function($routeProvider){
    'use strict';

    $routeProvider
      .when('/pages', {
        templateUrl: 'views/pages/index.html',
        controller: 'PagesIndexCtrl'
      });
  })
