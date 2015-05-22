'use strict';

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

    $facebookProvider.setAppId('653014024831372');

    $facebookProvider.setCustomInit({
        version: 'v2.2',
        channelUrl : '/index.html',
        xfbml : true
    });

    $facebookProvider.setPermissions('user_id, email, public_profile');
  })

  .run(function() {
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk')); 
  })

  .controller( 'fbCtrl', [ '$facebook', function($facebook) {
    var self = this;

    self.isLoggedIn = false;
    self.login = function() {
      console.log('hello');
      $facebook.login().then(function(ret) {
        console.log(ret);
        console.log("Please see me")
        refresh();
      }, function(error) {
        console.log(error)
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

  }]);