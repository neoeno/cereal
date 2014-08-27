angular.module('cereal').service('Current', function(User){
  'use strict';

  var Current = {}

  Object.defineProperty(Current, 'user', {
    get: function(){
      return User.wrap(Parse.User.current())
    }
  })

  return Current

})
