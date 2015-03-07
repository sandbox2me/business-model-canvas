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
          localData = JSON.parse(localStorage.getItem("pbBMC"));
          localData[scope.currentBox.key] = element.find('textarea').val();
          if(chrome.app.window){
            //ChromeApp
            chrome.storage.local.get('pbBMC', function(localdata){
              console.log('Saving data');
            });
          }else{
            //WebApp
            localStorage.setItem("pbBMC", JSON.stringify(localData));
          }
        }, 3000);
      }
    };
  });