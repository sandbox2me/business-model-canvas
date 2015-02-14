'use strict';

/**
 * @ngdoc directive
 * @name anyandgoApp.directive:fullscreen
 * @description
 * # fullscreen
 */
angular.module('pbCanvas')
  .directive('fullscreen', function(){
    return{
      restrict: 'A',
      link: function postLink(scope, element, attrs){
        scope.viewBox = "all";
        
        scope.changeBox = function(box) {
          scope.viewBox = box;
        }
      }
    };
  });