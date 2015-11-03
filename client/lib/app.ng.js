/**
 * Created by andrea.terzani on 03/11/2015.
 */

angular.module('starter', [
        'angular-meteor',
        'ui.router'
])
    .filter('to_trusted', ['$sce', function($sce){
            return function(text) {
                    return $sce.trustAsHtml(text);
            };
    }]);

