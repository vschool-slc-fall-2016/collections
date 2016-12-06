var app = angular.module("App");

app.directive("navbar", ["UserService", function (UserService) {
    return {
        templateUrl: "components/navbar/navbar.html",
        link: function (scope) {
            scope.UserService = UserService;
        }
    }
}]);