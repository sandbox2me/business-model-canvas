app.controller("viewController", function($scope, $routeParams, $location) {
  
  $scope.params = $routeParams;
  
  $.getJSON( "canvasAttrs.json", function( data ) {
    $scope.currentBox = data[$routeParams.boxname];
    $scope.boxes = data;
    
    setTimeout(function(){
      console.log('scome Ctrl: '+ $scope.textMD, $scope);
      $scope.$apply();
    }, 1);
  });
});