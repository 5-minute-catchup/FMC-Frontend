'use strict';
angular.module('fiveMinCatchupApp', ['ngGeolocation', 'uiGmapgoogle-maps'])
  .controller('MainCtrl', ['$geolocation', '$scope', function($geolocation, $scope) {
        $geolocation.getCurrentPosition({
            timeout: 60000
         }).then(function(position) {
            $scope.myPosition = position;
         });
         $scope.map = myPosition.coords 
          latitude: 0,
          longitude: 0,

  }]);
