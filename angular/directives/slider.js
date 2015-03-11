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
        console.log('slider');
        
        //Read boxes information
        if( location.path().match(/view/gi) ) {
          scope.currentBox = location.path().replace('/view/', '');
          var mode = 'view';
        }
        
        if( location.path().match(/edit/gi) ) {
          scope.currentBox = location.path().replace('/edit/', '');
          var mode = 'edit';
        }
        var currentBox = scope.currentBox;
        //Making slider
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
        
        //Set height to textarea and mirror div
//        setTimeout(function(){
//          $('textarea, ._edit .col-lg-6:last-child').css('height', $(window).height() - 150);
//        }, 120);
        
        
        //Change slide on arrow key Up
        $(window).on('keyup', function(e){
          
          //If textarea is focused do nothing
          if( $('textarea').is(":focus") )
            return false;
          
          var indexCurrentView = views.indexOf(currentBox);
          switch(e.keyCode){
            case 37: //Left arrow
              if( indexCurrentView === 0)
                location.url('/'+mode+'/revenueStreams');
              else
                location.url('/'+mode+'/'+views[--indexCurrentView]);
              break;
            case 39: //Right arrow
              if( indexCurrentView === 8)
                location.url('/'+mode+'/keyPartness');
              else
                location.url('/'+mode+'/'+views[++indexCurrentView]);
              break;
          }
          scope.$apply();
        });
      }
    };
  }]);