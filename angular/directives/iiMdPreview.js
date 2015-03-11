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
        
          console.log('iiMdPreview');
          if (attrs.url)
            scope.initFromUrl(attrs.url);

          if (attrs.text)
            scope.initFromText(attrs.text);

          scope.textareaName = attrs.textareaName;
        
      }
    };
  });