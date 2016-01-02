'use strict';

/**
 * @ngdoc overview
 * @name pmoviesWebApp
 * @description
 * # pmoviesWebApp
 *
 * Main module of the application.
 */
angular
  .module('pmoviesWebApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {
      $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('orange');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/:movieId', {
        templateUrl: 'views/movieDetailsPartial.html',
        controller: 'movieDetailsCtrl' 
      })
      .otherwise({
        redirectTo: '/'
      });
  });
