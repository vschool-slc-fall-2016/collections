
var app = angular.module("App");

app.service('HttpService', ['$http', function($http) {

    // owner requests

    this.getUserInfo = function() {
        return $http.get('/api/owner/')
            .then(function(response) {
                return response.data;
            })
    };

    this.updateSpecificUser = function(id, editUser) {
        return $http.put('/api/owner/' + id, editUser)
            .then(function(response) {
                return response.data;
            })
    };

    // items requests

    this.getItems = function () {
        return $http.get('/api/item/')
            .then(function (response) {
                return response.data;
            }, function (response) {
                console.log("There was an error and it was: " + reponse.status + ":" + response.statusText)
            });
    };

    this.saveNewItem = function (input) {
        return $http.post('/api/item/', input)
            .then(function (response) {
                return response.data;
            }, function (response) {
                console.log("Status num: " + response.status + " " + response.statusText);
            });
    };

    this.updateSpecificItem = function (id, updatedItem) {
        return $http.put('/api/item/' + id, updatedItem)
            .then(function (response) {
                return response.data;
            }, function (response) {
                console.log("Status num: " + response.status + " " + response.statusText);
            });
    };

    this.deleteItem = function (id) {
        return $http.delete('/api/item/' + id)
            .then(function (response) {
                return response.data;
            }, function (response) {
                console.log("Status num: " + response.status + " " + response.statusText);
            })
    };

    // get to show all collections across all users

    this.getAllItems = function () {
        return $http.get('/shared')
            .then( function(response) {
                return response.data;
            })
    }


}]);