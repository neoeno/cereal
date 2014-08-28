angular.module('cereal.pages').controller('PagesIndexCtrl', function($scope, PageService, $filter) {
  'use strict';

  var nextPage = PageService.nextIndexToBeReleased(),
      versionsShowing = []

  $scope.pages = PageService.getRange(nextPage-2,nextPage+5)

  $scope.icons = ['asterisk', 'cloud', 'glass', 'music', 'envelope',
  'search', 'heart', 'star', 'ok', 'remove', 'film', 'signal',
  'cog', 'trash', 'home', 'time', 'road', 'lock', 'flag', 'barcode',
  'tag', 'book', 'facetime-video', 'picture', 'tint',
  'fast-forward', 'gift', 'eye-open', 'eye-close', 'fire',
  'plane', 'random', 'calendar', 'comment', 'shopping-cart', 'bullhorn',
  'bell', 'certificate', 'thumbs-up', 'globe', 'wrench', 'briefcase',
  'paperclip', 'heart-empty', 'link', 'phone', 'pushpin',
  'usd', 'send', 'earphone', 'cutlery', 'credit-card',
  'tree-conifer', 'tree-deciduous']

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
