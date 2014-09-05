angular.module('cereal.prompts', [
  'ngRoute',
  'ngSanitize',
  'parse-angular',
  'btford.markdown'
  ]).config(function($routeProvider){
    'use strict';

    $routeProvider
      .when('/prompts', {
        templateUrl: 'views/prompts/index.html',
        controller: 'PromptsIndexCtrl'
      });
  })
