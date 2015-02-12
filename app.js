var app = angular.module('html5-canvas', [
  'hc.marked'
]);

app.config(['markedProvider', function(markedProvider) {
  markedProvider.setOptions({gfm: true});
}]);