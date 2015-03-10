/**
 * @ngdoc directive
 * @name anyandgoApp.directive:iiMdPreview
 * @description
 * # Se reescribe la directiva publicada por angular-markdown-preview iiMdPreview (https://github.com/evgenyneu/angular-markdown-preview)
 */
angular.module('pbCanvas')
  .directive('lstorage', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        console.log('lstorage');
        var localData = '';
        setInterval(function(){
          
          if(chrome.app.window){
            //ChromeApp
            chrome.storage.local.get('pbBMC', function(localData){
              console.log('Antes: ' + localData);
              //Aux
              localData.pbBMC[scope.currentBox.key] = element.find('textarea').val();
              console.log('Despues: ' + localData);
              
//              //Remove
//              chrome.storage.local.remove("pbBMC", function(aux){
//                console.log('remove', aux);
//              });
              
              //Set
              chrome.storage.local.set({pbBMC:localData.pbBMC}, function(localData){
                console.log('Getting data');
              });
            });
          }else{
            //WebApp
//            localData = JSON.parse(localStorage.getItem("pbBMC"));
//            localData[scope.currentBox.key] = element.find('textarea').val();
//            localStorage.setItem("pbBMC", JSON.stringify(localData));
          }
        }, 3000);
      }
    };
  });