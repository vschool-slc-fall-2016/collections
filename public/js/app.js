var app = angular.module("App", []);

app.controller("mainCtrl", ["$scope", "$http", function ($scope, $http) {

    $scope.getHello = function () {
            $http.get("/auth")
                .then(function (response) {
                    $scope.hello = response.data
                    console.log(data)
                })
        }
        //    $scope.getHello();
}]);