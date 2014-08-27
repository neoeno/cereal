angular.module('cereal.users').factory('User', function() {
  'use strict';

  var User = function(){
    this.passThru = []
  }

  User.wrap = function(parseObj) {
    var user = new User()
    user.$parseObj = parseObj
    return user
  }

  User.prototype = {

    // GETTERS/SETTERS

    get name() {
      return this.getIfPossible('name')
    },

    get username() {
      return this.getIfPossible('username')
    },

    get facebookID() {
      return this.$parseObj.get('authData').facebook.id
    },

    // COMPUTED PROPERTIES

    get avatar() {
      return this.avatarOfDimensions(50, 50)
    },

    get link() {
      return 'http://facebook.com/'+this.facebookID
    },

    // PUBLIC METHODS

    avatarOfDimensions: function(width, height) {
      return 'http://graph.facebook.com/'+this.facebookID+'/picture?width='+width+'&height='+height
    },

    // PRIVATE METHODS

    getIfPossible: function(field) {
      if(this.$parseObj) {
        return this.$parseObj.get(field)
      }else{
        return ''
      }
    }

  }

  return User

});
