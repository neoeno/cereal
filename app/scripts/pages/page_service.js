angular.module('cereal.pages').service('PageService', function($filter) {
  'use strict';

  var PageService = this,
      fakePages = []

  var startDate = new Date(2014, 0, 6),
      pagesPerWeek = 4,
      schedule = [0,2,4,5],
      rSchedule = [1,1,2,2,3,4,4]

  PageService.get = function(index) {
    return fakeSkin(fakePages[index] || PageService.makePage(index))
  }

  PageService.getRange = function(start, end) {
    var pages = []
    for( var i=start ; i<=end ; i++ ) {
      pages.push( PageService.get(i) )
    }
    return pages
  }

  PageService.makePage = function(index) {
    return {
      index: index
    }
  }

  PageService.getNextPage = function(date){
    date = date || new Date()
    var oneDay = 24*60*60*1000,
        daysElapsed = Math.round(Math.abs((startDate.getTime() - date.getTime())/(oneDay))),
        weeksElapsed = Math.floor(daysElapsed/7),
        daysLeftOver = daysElapsed % 7,
        index = weeksElapsed * pagesPerWeek + rSchedule[daysLeftOver]
    return index
  }

  function getDateForIndex(index) {
    var weeksElapsed = Math.floor(index/pagesPerWeek)
    var pageNumberInWeek = index % pagesPerWeek

    var date = angular.copy(startDate)
    date.setDate( date.getDate() + weeksElapsed * 7 + schedule[pageNumberInWeek] )

    return date
  }

  function fakeSkin(data) {
    data.scheduledDate = getDateForIndex(data.index)
    data.temporalStatus = temporalStatus(data.scheduledDate)
    return data
  }

  function temporalStatus(date) {
    var now = new Date
    if( date > now ){
      return 'future'
    } else if( $filter('date')(date, 'yyyyMMdd') == $filter('date')(now, 'yyyyMMdd') ) {
      return 'today'
    } else {
      return 'past'
    }
  }


  ///////////////////////////////////////////////


  fakePages[134] = {
      index: 134,
      status: 'Drafted',
      abstract: 'James likes a cat.' }

  fakePages[135] = {
      index: 135,
      status: 'Drafted',
      abstract: 'James walks to the shop.'}

  fakePages[136] = {
      index: 136,
      status: 'Complete',
      abstract: 'James views this as over.' }

  fakePages[138] = {
      index: 138,
      status: 'Editing',
      abstract: 'James is a cat.' }


})
