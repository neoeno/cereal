angular.module('cereal.pages').controller('PromptsIndexCtrl', function($scope, Prompt) {
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

  $scope.submitNewPrompt = function() {
    $scope.newPrompt.$save().then(function() {
      $scope.prompts.unshift($scope.newPrompt)
    })
  }

})
