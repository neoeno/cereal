angular.module('cereal.pages').factory('Page', function($filter, User) {
  'use strict';

  var startDate = new Date(2014, 0, 6),
      pagesPerWeek = 4,
      schedule = [0,2,4,5],
      rSchedule = [1,1,2,2,3,4,4],
      ParsePage = Parse.Object.extend('Page')

  var Page = function(params){
    var self = this
    self.passThru = ['status', 'icon', 'abstract', 'body']

    self.constants = {
      startDate: startDate,
      pagesPerWeek: pagesPerWeek,
      schedule: schedule,
      rSchedule: rSchedule
    }

    self.index_ = params.index
    self.$parseObj = new ParsePage({index: params.index})
  }

  Page.wrap = function(parseObj) {
    var page = new Page({index: parseObj.get('index')})
    page.$parseObj = parseObj
    return page
  }

  Page.find = function(index) {
    var page = new Page({index: index})

    var query = new Parse.Query(ParsePage)
    query.equalTo('index', index)
    query.first({
      success: function(result) {
        if(result) {
          page.$parseObj = result
        }else{
          page.$parseObj = new ParsePage({index: index})
        }
      }
    })

    return page
  }

  Page.prototype = {

    // SIMPLE SETTERS //

    get index() {
      return this.index_
    },

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

    // COMPUTED PROPERTIES //

    get temporalStatus() {

      var now = new Date()
      if( this.scheduledDate > now ){
        return 'future'
      } else if( $filter('date')(this.scheduledDate, 'yyyyMMdd') === $filter('date')(now, 'yyyyMMdd') ) {
        return 'today'
      } else {
        return 'past'
      }

    },

    get scheduledDate() {
      return this.calcScheduledDate()
    },

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

    fetchWriters: function() {
      var self = this
      self.writers_ = []
      self.writers_.$loading = true

      self.$parseObj.relation('writers').query().find({
        success: function(writers){
          Array.prototype.push.apply(self.writers_, writers.map(User.wrap));
          self.writers_.$loading = false
        }
      })
    },

    calcScheduledDate: function() {
      var weeksElapsed = Math.floor( this.index / this.constants.pagesPerWeek )
      var pageNumberInWeek = this.index % this.constants.pagesPerWeek

      var date = angular.copy(this.constants.startDate)
      date.setDate( date.getDate() + weeksElapsed * 7 + this.constants.schedule[pageNumberInWeek] )

      return date
    },

    getIfPossible: function(field) {
      if(this.$parseObj) {
        return this.$parseObj.get(field)
      }else{
        return ''
      }
    },

    addCurrentUserRelation: function() {
      this.$parseObj.relation('writers').add(Parse.User.current())

      if(typeof this.writers_ !== 'undefined') {
        this.writers_.push(User.wrap(Parse.User.current()))
      }
    }

  }


  return Page
})
