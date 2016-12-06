var app = angular.module("Auth");

app.controller("SignupController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    $scope.passwordMessage = "";

    $scope.signup = function (user) {


            UserService.signup(user).then(function (response) {
                $location.path("/login");

            }, function (response) {
                alert("There was a problem: " + response.data.message);
            });

    }
}]);


// test this kkkkkkkadhjk
