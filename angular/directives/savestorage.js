/**
 * @ngdoc directive
 * @name pbCanvas.directive:savestorage
 * @description
 * # Save data on localStorage
 */
angular.module('pbCanvas')
  .directive('savestorage', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        console.log('savestorage');
        var localData = '';
        
        scope.saveData = function(){
          if(chrome.app.window){
            //ChromeApp
            chrome.storage.local.get('pbBMC', function(localData){
              localData.pbBMC[scope.currentBox.key] = $('textarea').val();
              //Set
              chrome.storage.local.set({pbBMC:localData.pbBMC}, function(cb){
                console.log('Setting data'+cb);
              });
            });
          }else{
            //WebApp
//            localData = JSON.parse(localStorage.getItem("pbBMC"));
//            localData[scope.currentBox.key] = element.find('textarea').val();
//            localStorage.setItem("pbBMC", JSON.stringify(localData));
          }
        };
        
        $('textarea').markdown({
          autofocus:false,
          savable:false,
          additionalButtons: [
            [{
              name: "groupCustom",
              data: [{
                name: "cmdSave",
                title: "Save",
                icon: "glyphicon glyphicon-floppy-save",
                height: '100%',
                callback: function(){
                  scope.saveData();
                  $('textarea').focus();
                }

              }]
            }]
          ]
        });
      }
    };
  });