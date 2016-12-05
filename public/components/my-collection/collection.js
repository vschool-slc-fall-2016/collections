var app = angular.module("App");

app.controller("collectionCtrl", ["$scope", "HttpService", function($scope, HttpService) {

    //get item
    $scope.getItem = function(gotItem) {
        HttpService.getItems();
        console.log("get item is working");
    };   
    //update item
    $scope.updateItem = function(itemId) {
        HttpService.updateSpecificItem();
        console.log("update item is working");
    };
    //delete Item
    $scope.deleteItem = function(itemId) {
        HttpService.deleteItem();
        console.log("deleting item is working");
    } ;
}]);