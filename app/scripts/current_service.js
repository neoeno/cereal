angular.module('cereal').service('Current', function(User){
  'use strict';

  var userCache = {}
  var Current = {}

  Object.defineProperty(Current, 'user', {
    get: function(){
      return User.wrap(Parse.User.current())
    }
  })

  Current.userCache = {
    get: function(id) {
      if(userCache[id]) {
        return userCache[id]
      }else{
        userCache[id] = User.find(id)
        return userCache[id]
      }
    }
  }

  return Current

})
