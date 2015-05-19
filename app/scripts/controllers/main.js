'use strict';

var app = angular.module('fiveMinCatchupApp');

  app.controller('MainCtrl', function ($scope, uiGmapGoogleMapApi) {

    $scope.map = {
      center: {
        latitude: 37.7749295,
        longitude: -122.4194155
      },
      zoom: 8
    }

    $scope.markers = [{
        id: 0,
        coords: {
            latitude: 37.7749295,
            longitude: -122.4194155
        },
        data: 'restaurant'
    }];

  });
