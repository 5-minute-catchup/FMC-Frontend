'use strict';

angular.module('fiveMinCatchupApp')
  .controller('MainCtrl', function($scope, uiGmapGoogleMapApi) {
 
    $scope.map = {
      center: {
        latitude: 51.517362399999996,
        longitude: -0.0733853
      },
      zoom: 16
    };

  navigator.geolocation.getCurrentPosition(function(pos) {
    $scope.map.center = {
     latitude: pos.coords.latitude,
     longitude: pos.coords.longitude
    };
    $scope.$apply();
  });
});
