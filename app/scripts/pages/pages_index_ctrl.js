angular.module('cereal.pages').controller('PagesIndexCtrl', function($scope){
  'use strict';

  $scope.pages = [
    {
      index: 32,
      scheduledDate: 'Yesterday',
      status: 'Past',
      abstract: 'James likes a cat.'
    },
    {
      index: 33,
      scheduledDate: 'Today',
      status: 'Drafted',
      abstract: 'James walks to the shop.'
    },
    {
      index: 34,
      scheduledDate: 'Tomorrow',
      status: 'Complete',
      abstract: 'James views this as over.'
    },
    {
      index: 35,
      scheduledDate: 'July 23rd',
      status: 'Editing',
      abstract: 'James is a cat.'
    },
    {
      index: 36
    }
  ]
})
