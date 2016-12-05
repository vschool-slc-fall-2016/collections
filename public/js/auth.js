// angular module. 
var app = angular.module("Auth", ["ngStorage"]);  

app.config(["$routeProvider", function ($routeProvider) {

    // Adding authentication-specific routes to our app
    $routeProvider
        .when("/signup", {
            templateUrl: "../components/auth/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "../components/auth/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            controller: "LogoutController",
            template: ""
        });
}]);

// This service exclusively helps us deal with the token we receive from the server
app.service("TokenService", ["$localStorage", function ($localStorage) {

    this.setToken = function (token) {

        // This sets a new localStorage item called "token" and sets the value
        $localStorage.token = token;
    };

    // Get the token from localStorage and return it to wherever this method was called
    this.getToken = function () {
        return $localStorage.token;
    };

    // Delete the token from localStorage. This is how we'll effectively "log out".
    this.removeToken = function () {
        delete $localStorage.token;
    };
}]);


// This service deals specifically with user-related things, such as signing up, logging in, and logging out
app.service("UserService", ["$http", "TokenService", function ($http, TokenService) {

    // Send a request to the server to add a new user to the database.
    this.signup = function (user) {
        return $http.post("/auth/signup", user);
    };

    // get a token back from the server. This token is like our
    //ask the server for the token, and then save the token.
    this.login = function (user) {
        return $http.post("/auth/login", user).then(function (response) {

            // Save token from the response to localstorage
            TokenService.setToken(response.data.token);
        });
    };

    // Log out, removing token
    this.logout = function() {
        TokenService.removeToken();
    };

    // This method checks if there is a token saved.
    //to change the navbar view
    this.isAuthenticated = function() {

        // Turn the value into a boolean
        return !!TokenService.getToken();
    };

}]);


// HTTP interceptor to "intercept" outgoing requests and incoming // responses to make sure they have a header.

app.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {
    this.request = function (config) {
        var token = TokenService.getToken();
        if (token) {
            config.headers = config.headers || {};

            // If there is a Token saved in localStorage, set the header of any outgoing requests to have
            // the token included in it.
            config.headers.Authorization = "Bearer " + token
        }
        return config;
    };

    // error handling
    this.responseError = function (response) {
        if (response.status === 401) {
            TokenService.removeToken();
            $location.path("/login");
        }
        return $q.reject(response);
    }
}]);

// Pushing our service onto an array of interceptors,
//  which will run before requests go out and responses come in.
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
});