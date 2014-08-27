angular.module('cereal.users', [
  'ngRoute',
  'parse-angular'
  ]).config(function($routeProvider){
    'use strict';

    $routeProvider
      .when('/login', {
        templateUrl: 'views/users/login.html',
        controller: 'UsersLogInCtrl'
      });
  })
