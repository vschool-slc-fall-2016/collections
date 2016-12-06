var app = angular.module('App');

app.controller('browseCtrl', ["$scope", 'HttpService', function($scope, HttpService) {

    $scope.allItems = {};

    (function getAllItems(){
        HttpService.getAllItems().then(function(allItems){
            $scope.allItems = allItems;
        })
    })();

}]);