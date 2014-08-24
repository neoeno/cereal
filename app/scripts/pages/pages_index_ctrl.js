angular.module('cereal.pages').controller('PagesIndexCtrl', function($scope, PageService){
  'use strict';

  var nextPage = PageService.getNextPage()

  $scope.pages = PageService.getRange(nextPage-4,nextPage+7)

})
