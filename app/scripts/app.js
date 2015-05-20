'use strict';

/**
 * @ngdoc overview
 * @name fmcFrontendApp
 * @description
 * # fmcFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('fmcFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

