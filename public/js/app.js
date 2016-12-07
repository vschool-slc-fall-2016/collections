var app = angular.module("App", ["ngRoute", 'Auth']);

app.controller("mainCtrl", ["$scope", "HttpService", function ($scope, HttpService) {

    $scope.getCollection = function () {
        $http.get("/auth")
            .then(function (response) {
                console.log(response.data);
                return response.data;
            })
    };
    //post new info, done wrong?
    this.addCollection = function(newCollection) {
        return $http.post("/auth", newCollection)
            .then(function(response) {
                console.log("response ", response);
                return response.data;
            });
    }
    //update collection
    this.updateCollection = function(collectionId) {
        return $http.put("/auth/" + collectionId)
            .then(function (response) {
                console.log("response ", response);
                return response.data;
            })
    }
    //delete collection
    this.deleteCollection = function(collectionId) {
        return $http.delete("/auth/" + collectionId)
            .then(function (response) {
                return response.data;
            });
    }
    
    
}]);