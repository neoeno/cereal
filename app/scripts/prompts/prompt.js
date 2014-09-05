angular.module('cereal.prompts').factory('Prompt', function(User) {
  'use strict';

  var ParsePrompt = Parse.Object.extend('Prompt')

  var Prompt = function(){
    var self = this

    self.$parseObj = new ParsePrompt()
  }

  Prompt.wrap = function(parseObj) {
    var prompt = new Prompt()
    prompt.$parseObj = parseObj
    return prompt
  }

  Prompt.prototype = {

    // PASSTHRU GETTERS/SETTERS // can prob b abstracted

    get status() {
      return this.getIfPossible('status')
    },

    set status(status) {
      this.$parseObj.set('status', status)
    },

    get icon() {
      return this.getIfPossible('icon')
    },

    set icon(icon) {
      this.$parseObj.set('icon', icon)
    },

    get abstract() {
      return this.getIfPossible('abstract')
    },

    set abstract(abstract) {
      this.$parseObj.set('abstract', abstract)
    },

    get body() {
      return this.getIfPossible('body')
    },

    set body(body) {
      this.$parseObj.set('body', body)
    },

    get writers() {
      if(typeof this.writers_ === 'undefined') {
        this.fetchWriters()
      }

      return this.writers_
    },

    get createdAt() {
      return this.$parseObj.createdAt
    },

    // COMPUTED PROPERTIES //

    // PUBLIC METHODS //

    $save: function() {
      var self = this
      self.$saving = true

      self.addCurrentUserRelation()

      return self.$parseObj.save().then(function() {
        self.$saving = false
      })
    },

    // PRIVATE METHODS //

    getIfPossible: function(field) {
      if(this.$parseObj) {
        return this.$parseObj.get(field)
      }else{
        return ''
      }
    },

    addCurrentUserRelation: function() {
      this.$parseObj.set('prompterId', Parse.User.current().id)
    }

  }


  return Prompt
})
