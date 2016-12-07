var app = angular.module("App");

app.controller("collectionCtrl", ["$scope", "HttpService", function ($scope, HttpService) {

    $scope.showEditableFields = false;


    $scope.myItems = {};
    //get item
    (function getItem() {
        HttpService.getItems().then(function (myItems) {
            $scope.myItems = myItems;

        })
    })();

    //update item
    $scope.updateItem = function (index, itemObject) {
        var itemId = itemObject._id;
        HttpService.updateSpecificItem(itemId, itemObject)
            .then(function(newestItemObject) {
                $scope.myItems = newestItemObject
            });
        HttpService.getItems().then(function (myItems) {
            $scope.myItems = myItems;

        })

    };
    //delete Item
    $scope.deleteItem = function (itemObject) {
        var itemId = itemObject._id;
        HttpService.deleteItem(itemId);
        HttpService.getItems().then(function (myItems) {
            $scope.myItems = myItems;

        })

    };

    $scope.discardChanges = function() {

    }

}]);