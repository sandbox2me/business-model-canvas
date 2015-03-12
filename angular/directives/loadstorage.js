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
      link: function (scope, element, attrs) {
        
        var localData = new Object;
        if(chrome.app.window){
          //ChromeApp
          chrome.storage.local.get('pbBMC', function(localData){
            if(localData.pbBMC == undefined){ //onError
              $.getJSON('template.json', function(jsonData){
                chrome.storage.local.set({pbBMC:jsonData}, function(cb){});
                localData.pbBMC = jsonData;
              });
              //return;
            }
            
            if(location.path().match('/view/') || location.path().match('/edit/')){
              currentBox = location.path().replace('/view/', '');
              currentBox = currentBox.replace('/edit/', '');
              scope.textMD = localData.pbBMC[currentBox];
            }
            
            scope.localData = localData.pbBMC;
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