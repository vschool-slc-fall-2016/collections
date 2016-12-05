var app = angular.module("Auth");

app.controller("LogoutController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    // this controller runs, logs them out (deletes the token from localStorage), and then immediately redirects them to the home page.
    UserService.logout();
    $location.path("/");
}]);