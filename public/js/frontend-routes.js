var app = angular.module("App");

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "mainCtrl"
        })
        .when('/new-item', {
            templateUrl: "components/new-item/new-item.html",
            controller: "newItemCtrl"
        })
        .when('/mycollection', {
            templateUrl: 'components/my-collection/collection.html',
            controller: 'collectionCtrl'
        })
        .when('/browse', {
            templateUrl: 'components/browse/browse.html',
            controller: 'browseCtrl'
        })
        .otherwise({
            redirectTo: "/home"
        })
}]);