angular.module('cereal.users').controller('UsersLogInCtrl', function($scope, $location) {
  'use strict';

  $scope.logInWithFacebook = function() {
    Parse.FacebookUtils.logIn(null, {
      success: function(user) {
        FB.api('/me', function(userData) {
          user.set('name', userData.name);

          postLogInRedirect()
        })

      }
    });
  }

  function postLogInRedirect(){
    $location.url('/pages')
  }

  if(Parse.User.current()) {
    postLogInRedirect()
  }

})
