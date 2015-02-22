'use strict';

/**
 * @ngdoc directive
 * @name anyandgoApp.directive:iiMdPreview
 * @description
 * # Se reescribe la directiva publicada por angular-markdown-preview iiMdPreview (https://github.com/evgenyneu/angular-markdown-preview)
 */
angular.module('pbCanvas')
  .directive('iiMdPreview', function() {
    return {
      templateUrl: 'angular/templates/mirror-md.html',
      restrict: 'C',
      replace: true,
      controller: 'Ctrl',
      scope: {},
      link: function(scope, element, attrs) {
        if (attrs.url) {
          scope.initFromUrl(attrs.url);
        }
        if (attrs.text) {
          scope.initFromText(attrs.text);
        }
        
//        if (attrs.localstorage) {
//          var localData = JSON.parse(localStorage.getItem("pbBMC"));
//          if(localData !== null){
//            scope.initFromText(localData[attrs.localstorage]);
//          }
//        }
        
        scope.textareaName = attrs.textareaName;
      }
    };
  });