angular.module('cereal.pages').service('PageService', function($filter, Page) {
  'use strict';

  var PageService = this,
      ParsePage = Parse.Object.extend('Page')

  var startDate = new Date(2014, 0, 6),
      pagesPerWeek = 4,
      // schedule = [0,2,4,5],
      rSchedule = [1,1,2,2,3,4,4]



  PageService.get = function(index) {
    return new Page({index: index})
  }

  PageService.getRange = function(start, end) {
    var pages = [],
        query = new Parse.Query(ParsePage)

    query.greaterThanOrEqualTo('index', start)
    query.lessThanOrEqualTo('index', end)

    query.find({
      success: function(results) {

        // Default to array of blank objects
        for(var i=start ; i <= end ; i++) {
          pages.push( new Page({index: i}) )
        }

        // Override with the objects we found
        results.forEach(function(obj) {
          var page = Page.wrap(obj)
          pages[page.index - start] = page
        })

      }
    })

    return pages
  }

  PageService.nextIndexToBeReleased = function(date){
    date = date || new Date()
    var oneDay = 24*60*60*1000,
        daysElapsed = Math.round(Math.abs((startDate.getTime() - date.getTime())/(oneDay))),
        weeksElapsed = Math.floor(daysElapsed/7),
        daysLeftOver = daysElapsed % 7,
        index = weeksElapsed * pagesPerWeek + rSchedule[daysLeftOver]
    return index
  }


})
