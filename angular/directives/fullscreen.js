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
      restrict: 'AC',
      link: function postLink(scope, element, attrs){
        scope.viewBox = "all";
        
        scope.changeBox = function(box) {
          scope.viewBox = box;
          if(box === 'all'){
            $('#row-up section.box').removeClass("fullscreen");
          }else{
            $('#row-up section.box').addClass("fullscreen");
            
          }
        }
      }
    };
  });