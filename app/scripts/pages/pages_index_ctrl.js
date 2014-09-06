angular.module('cereal.pages').controller('PagesIndexCtrl', function($scope, PageService, ICONS, $filter) {
  'use strict';

  var //nextPage = PageService.nextIndexToBeReleased(),
      versionsShowing = []

  $scope.pages = PageService.getRange(0, 10)

  $scope.icons = ICONS

  $scope.selectPage = function(page) {
    $scope.isEditingPage = false
    $scope.selectedPage = page
    versionsShowing = []
  }

  $scope.editPage = function() {
    $scope.selectedPage.editLock()
    $scope.isEditingPage = true
    versionsShowing = []
  }

  $scope.savePage = function() {
    $scope.isEditingPage = false
    $scope.selectedPage.$save()
  }

  $scope.diff = function(oldStr, newStr) {
    return $filter('diff')(oldStr, newStr)
  }

  $scope.toggleShowVersion = function(version) {
    if($scope.shouldShowVersion(version)) {
      versionsShowing.splice(versionsShowing.indexOf(version), 1)
    }else{
      versionsShowing.push(version)
    }

  }

  $scope.shouldShowVersion = function(version) {
    return versionsShowing.indexOf(version) !== -1
  }

})
