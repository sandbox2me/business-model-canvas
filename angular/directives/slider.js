'use strict';

/**
 * @ngdoc directive
 * @name anyandgoApp.directive:slider
 * @description
 * # slider between views
 */
angular.module('pbCanvas')
  .directive('slider', ['$location', function(location){
    return{
      restrict: 'A',
      link: function postLink(scope, element, attrs){
        
        var views = [
          'keyPartness',
          'keyActivities',
          'keyResorces',
          'valueProposition',
          'customerRelationship',
          'channels',
          'customerSegments',
          'costStructure',
          'revenueStreams'
        ];
        
        $('textarea').hide();
        
        $(window).on('keyup', function(e){
          var currentView = views.indexOf(scope.params.boxname);
          switch(e.keyCode){
            case 37: //Left arrow
              if( currentView === 0)
                location.url('/view/revenueStreams');
              else
                location.url('/view/'+views[--currentView]);
              break;
            case 39: //Right arrow
              if( currentView === 8)
                location.url('/view/keyPartness');
              else
                location.url('/view/'+views[++currentView]);
              break;
          }
          scope.$apply();
        });
      }
    };
  }]);