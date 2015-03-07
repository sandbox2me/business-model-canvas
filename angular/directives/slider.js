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
        var currentBox = '';
        
        if( location.path().match(/view/gi) )
          scope.currentBox = location.path().replace('/view/', '');
        
        if( location.path().match(/edit/gi) )
          scope.currentBox = location.path().replace('/edit/', '');
        
        
        
        var localData = JSON.parse(localStorage.getItem("pbBMC"));
        if(localData == null){
          localData = {
            keyPartness: "",
            keyActivities: "",
            keyResorces: "",
            valueProposition: "",
            customerRelationship: "",
            channels: "",
            customerSegments: "",
            costStructure: "",
            revenueStreams: ""
          };
          console.log(localData);
          localStorage.setItem("pbBMC", JSON.stringify(localData));
        }else{
          scope.textMD = localData[scope.currentBox];
        }
        
        
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
        
        setTimeout(function(){
          //Set height to textarea and mirror div
          $('textarea, ._edit .col-lg-6:last-child').css('height', $(window).height() - 150);
        }, 120);
        
        //Change slide on arrow key Up
        $(window).on('keyup', function(e){
          
          //If textarea is focused do nothing
          if( $('textarea').is(":focus") ){
            return false;
          }
          
          var currentView = views.indexOf(scope.currentBox),
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