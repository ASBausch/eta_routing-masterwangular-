/**
 * Created by manadab on 1/10/16.
 */
var app = angular.module('app', ['ngRoute']);


app.controller("FormController", ['$scope', '$http', function($scope, $http) {
    $http({
        url: '/kitties',
        method: 'get'
    }).then(function (response) {
        $scope.kitty = response.data;
        console.log($scope.kitty);
    });


    $scope.submit = function () {
        var kitty = {kittyName: $scope.kittyName};
        $http({
            url: '/kitties',
            method: 'post',
            data: kitty
        }).then(function () {

        });

        //this may do nothing
        $http({
            url: '/kitties',
            //this gets the data to our post route in kitties.js
            method: 'get'
        }).then(function(res){
            $scope.kitty = res.data;

        });

        }

    }]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '/view/index.html',
        controller: 'FormController'
    });
}]);





