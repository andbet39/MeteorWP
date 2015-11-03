/**
 * Created by andrea.terzani on 03/11/2015.
 */
angular.module("starter")
    .controller('ViewPostCtrl', function($scope,$state,$stateParams,$meteor) {

        console.log('Binding to postid '+$stateParams.postid);

        $scope.post = $meteor.object(Posts,$stateParams.postid);


        $meteor.call('getPost',$stateParams.postid);

        $scope.click = function () {
            console.log($scope.post);
        }

    });