/**
 * @ngdoc directive
 * @name pbCanvas.directive:loadstorage
 * @description
 * # Load data from localstorage
 */
angular.module('pbCanvas')
  //.directive('loadstorage', function() {
  .directive('loadstorage', ['$location', function(location){
    return {
      restrict: 'A',
      link: function preLink(scope, element, attrs) {
        console.log('loadstorage');
        var localData = '';
        if(chrome.app.window){
          //ChromeApp
          chrome.storage.local.get('pbBMC', function(localData){
            currentBox = location.path().replace('/view/', '');
            currentBox = currentBox.replace('/edit/', '');
            scope.localData = localData.pbBMC;
            scope.textMD = localData.pbBMC[currentBox];            
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