angular.module('cereal.users').controller('UsersLogInCtrl', function($scope, $location) {
  'use strict';

  $scope.logInWithFacebook = function() {
    Parse.FacebookUtils.logIn(null, {
      success: function(user) {

        if(user.get('name')) {
          postLogInRedirect()

        } else {
          FB.api('/me', function(userData) {
            user.set('name', userData.name);

            postLogInRedirect()
          })
        }
      }
    });
  }

  function postLogInRedirect(){
    $location.path('/pages')
  }

  if(Parse.User.current()) {
    postLogInRedirect()
  }

})
