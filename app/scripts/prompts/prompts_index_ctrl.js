angular.module('cereal.pages').controller('PromptsIndexCtrl', function($scope, ICONS, Prompt, Current) {
  'use strict';

  var ParsePrompt = Parse.Object.extend('Prompt'),
      query = new Parse.Query(ParsePrompt)

  $scope.newPrompt = new Prompt()
  $scope.prompts = []

  query.find({
    success: function(results) {
      results.forEach(function(result) {
        $scope.prompts.push(Prompt.wrap(result))
      })
    }
  })

  $scope.selectPrompt = function(prompt) {
    $scope.isEditingPrompt = false
    $scope.selectedPrompt = prompt
  }

  $scope.editPrompt = function() {
    $scope.isEditingPrompt = true
    $scope.selectedPrompt.assignTo(Current.user)
    $scope.selectedPrompt.status = 'assigned'
    $scope.selectedPrompt.$save()
  }

  $scope.savePrompt = function() {
    $scope.isEditingPrompt = false
    $scope.selectedPrompt.$save()
  }

  $scope.submitNewPrompt = function() {
    $scope.newPrompt.$save().then(function() {
      $scope.prompts.unshift($scope.newPrompt)
    })
  }

  $scope.isAvailable = function(prompt) {
    return true
  }

})
