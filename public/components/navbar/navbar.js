var app = angular.module("App");

app.directive("navbar", [function () {
    return {
        templateUrl: "components/navbar/navbar.html",
        link: function ($scope) {}
    }
}]);