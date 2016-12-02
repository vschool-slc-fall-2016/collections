var app = angular.module("App");

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "mainCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        })
}]);