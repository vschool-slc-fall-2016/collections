var app = angular.module("App");

app.controller("newItemCtrl", ["$scope", "HttpService", function($scope, HttpService) {
       
    //post a new item
    $scope.addItem = function(newItem) {
         HttpService.saveNewItem(newItem)
    }
       
}]);