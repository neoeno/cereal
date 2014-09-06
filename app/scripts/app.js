'use strict';

Parse.initialize('n42JAqtw5FUsJQb3UwBBNOrnueDo1dlImGbmk89N', 'NF0USFiBZUTsPPGyyucJcXVKS20eqhKdDqZAShcV');

/**
 * @ngdoc overview
 * @name cereal
 * @description
 * # cereal
 *
 * Main module of the application.
 */
angular
  .module('cereal', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'cereal.pages',
    'cereal.users',
    'cereal.prompts'
  ])
  .config(function ($routeProvider){//}, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider
      .otherwise({
        redirectTo: '/login'
      });
  })
  .constant('ICONS', ['asterisk', 'cloud', 'glass', 'music', 'envelope',
  'search', 'heart', 'star', 'ok', 'remove', 'film', 'signal',
  'cog', 'trash', 'home', 'time', 'road', 'lock', 'flag', 'barcode',
  'tag', 'book', 'facetime-video', 'picture', 'tint',
  'fast-forward', 'gift', 'eye-open', 'eye-close', 'fire',
  'plane', 'random', 'calendar', 'comment', 'shopping-cart', 'bullhorn',
  'bell', 'certificate', 'thumbs-up', 'globe', 'wrench', 'briefcase',
  'paperclip', 'heart-empty', 'link', 'phone', 'pushpin',
  'usd', 'send', 'earphone', 'cutlery', 'credit-card',
  'tree-conifer', 'tree-deciduous'])
