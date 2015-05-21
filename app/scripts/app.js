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
    'ngTouch',
    'ngFacebook'
  ])
  .config(function ($facebookProvider) {

    $facebookProvider.setAppId('495097777308126');

    $facebookProvider.setCustomInit({
        version: 'v2.1'
    });

    $facebookProvider.setPermissions('email', 'uesr_friends', 'public_profile');
  })

  .run(function($rootScope) {
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk')); 
  })

  .controller( function($facebook) {
    var self = this;

    self.isLoggedIn = false;
    self.login = function() {
      $facebook.login().then(function() {
        console.log("Hello")
        refresh();
      });
    }

    function refresh() {
      $facebook.api("/me").then(
        function(response) {
          console.log(response);
          self.welcomeMsg = "Welcome " + response.name
          self.isLoggedIn = true
        },
        function(err) {
          self.welcomeMsg = "Please log in";
        });
    }

    refresh();

  });