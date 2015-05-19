"use strict";

var app = angular.module("fiveMinCatchupApp", []);

app.factory("GeolocationService", ['$q', '$window', '$rootScope', function ($q, $window, $rootScope) {
    return function () {
        var deferred = $q.defer();

        if (!$window.navigator) {
            $rootScope.$apply(function() {
                deferred.reject(new Error("Geolocation is not supported"));
            });
        } else {
            $window.navigator.geolocation.getCurrentPosition(function (position) {
                $rootScope.$apply(function() {
                    deferred.resolve(position);
                });
            }, function (error) {
                $rootScope.$apply(function() {
                    deferred.reject(error);
                });
            });
        }

        return deferred.promise;
    }
}]);

app.controller('MainCtrl', ['$scope', 'GeolocationService', function ($scope, geolocation) {
    $scope.position = null;
    $scope.message = "Determining geolocation...";

    geolocation().then(function (position) {
        $scope.position = position;
    }, function (reason) {
        $scope.message = "Could not be determined."
    });
}]);