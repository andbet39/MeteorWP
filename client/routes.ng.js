/**
 * Created by andrea.terzani on 03/11/2015.
 */

angular.module('starter').config(function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'client/main/views/main.ng.html',
            controller: 'MainCtrl'
        })
        .state('view', {
           url: '/viewpost/:postid',
            templateUrl: 'client/viewpost/views/view.ng.html',
            controller: 'ViewPostCtrl'
         });


    $urlRouterProvider.otherwise("/main");

});

