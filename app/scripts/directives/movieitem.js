'use strict';

/**
 * @ngdoc directive
 * @name pmoviesWebApp.directive:movieItem
 * @description
 * # movieItem
 */
angular.module('pmoviesWebApp')
  	  .directive('movieItem', function () {
	    return {
	      templateUrl: './scripts/directives/movieItemTemplate.html',
	      restrict: 'E',
	      scope:{
	      	title: '=',
	      	url: '=src'
	      },
	      link: function postLink(scope, element, attrs) {
	      }
	    };
	  });
