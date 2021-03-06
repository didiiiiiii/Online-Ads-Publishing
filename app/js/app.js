//defines the Angular application - contain constants, and a few routes for the home, login and register screens

'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap']);

app.constant('baseServiceUrl', 'http://localhost:1337');
app.constant('pageSize', 2);

app.config(function ($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });
    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });
    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
    $routeProvider.otherwise(
        { redirectTp: '/'}
    );
    
});
