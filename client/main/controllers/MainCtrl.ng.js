/**
 * Created by andrea.terzani on 03/11/2015.
 */
angular.module("starter")
    .controller('MainCtrl', function($scope,$state,$stateParams,$meteor) {

        $scope.posts = $meteor.collection(Posts);

        $meteor.call('getPosts');

    });