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
          var currentView = views.indexOf(scope.params.boxname),
              mode = '';
          if( location.path().match('\/view\/') )
            mode = 'view';
          else
            mode = 'edit';
            
          switch(e.keyCode){
            case 37: //Left arrow
              if( currentView === 0)
                location.url('/'+mode+'/revenueStreams');
              else
                location.url('/'+mode+'/'+views[--currentView]);
              break;
            case 39: //Right arrow
              if( currentView === 8)
                location.url('/'+mode+'/keyPartness');
              else
                location.url('/'+mode+'/'+views[++currentView]);
              break;
          }
          scope.$apply();
        });
      }
    };
  }]);