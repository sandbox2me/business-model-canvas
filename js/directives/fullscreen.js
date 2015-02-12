'use strict';

$(document).ready(function(){
  $('div[fullscreen]').append('<i class="fa fa-users">');
});

/**
 * @ngdoc directive
 * @name anyandgoApp.directive:fullscreen
 * @description
 * # fullscreen
 */
angular.module('html5-canvas')
  .directive('fullscreen', function(){
    return{
      restrict: 'A',
      link: function postLink(scope, element, attrs){
        $(element).click(function(){
          console.log();
        });
      }
    };
  });