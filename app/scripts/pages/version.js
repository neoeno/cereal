angular.module('cereal.pages').factory('Version', function(User, Current) {
  'use strict';

  var Version = function(){
  }

  Version.wrap = function(parseObj) {
    var page = new Version()
    page.$parseObj = parseObj
    return page
  }

  Version.prototype = {

    // PASSTHRU GETTERS/SETTERS // can prob b abstracted

    get body() {
      return this.getIfPossible('body')
    },

    get date() {
      return this.$parseObj.createdAt
    },

    get writer() {
      if(typeof this.writer_ === 'undefined') {
        this.fetchWriter()
      }

      return this.writer_
    },

    // COMPUTED PROPERTIES //

    // PUBLIC METHODS //

    // PRIVATE METHODS //

    getIfPossible: function(field) {
      if(this.$parseObj) {
        return this.$parseObj.get(field)
      }else{
        return ''
      }
    },

    fetchWriter: function() {
      this.writer_ = Current.userCache.get(this.getIfPossible('writerId'))
    },

  }


  return Version
})
