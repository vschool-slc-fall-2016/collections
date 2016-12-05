var app = angular.module("Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    $scope.login = function (user) {
        UserService.login(user).then(function (response) {

            // If login was successful, send them to the list of their collection items.
            $location.path("/mycollection");

            // If it failed, alert them of the error message we sent from the server.
        }, function (response) {
            alert(response.data.message);
        });
    }
}]);