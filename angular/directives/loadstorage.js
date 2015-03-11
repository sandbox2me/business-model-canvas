/**
 * @ngdoc directive
 * @name anyandgoApp.directive:iiMdPreview
 * @description
 * # Se reescribe la directiva publicada por angular-markdown-preview iiMdPreview (https://github.com/evgenyneu/angular-markdown-preview)
 */
angular.module('pbCanvas')
  //.directive('loadstorage', function() {
  .directive('loadstorage', ['$location', function(location){
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        console.log('loadstorage');
        var localData = '';
        if(chrome.app.window){
          //ChromeApp
          chrome.storage.local.get('pbBMC', function(localData){
            currentBox = location.path().replace('/view/', '');
            currentBox = currentBox.replace('/edit/', '');
            scope.localData = localData.pbBMC;
            scope.textMD = localData.pbBMC[currentBox];
            //console.log(localData, currentBox, scope.textMD);
            scope.$apply();
          });
        }else{
          //WebApp
//            localData = JSON.parse(localStorage.getItem("pbBMC"));
//            localData[scope.currentBox.key] = element.find('textarea').val();
//            localStorage.setItem("pbBMC", JSON.stringify(localData));
        }
      }
    };
  }]);