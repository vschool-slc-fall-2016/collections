var app = angular.module("App");

app.controller("newItemCtrl", ["$scope", "$location", "HttpService", function($scope, $location, HttpService) {
       
    //post a new item
    $scope.addItem = function(newItem) {
         HttpService.saveNewItem(newItem)
         $location.path("/mycollection");
    }
       
}]);