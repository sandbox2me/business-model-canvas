// APP MODULES ===============================================
// congigure the modules to include on our app
var app = angular.module('pbCanvas', [
  'ngRoute',
  'evgenyneu.markdown-preview'
]);



// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller

app.config(function($routeProvider) {

    $routeProvider

      // home page (canvas page)
      .when('/', {
        templateUrl: 'angular/templates/canvas.html',
        //controller: 'mainController'
      })
      
      // contact page
      .when('/contact', {
          templateUrl: 'angular/templates/contact.html',
          //controller: 'contactController'
      })
      .otherwise({
        redirectTo: '/404.html'
      });

      /*
      
  
      // contact page
      .when('/edit', {
          templateUrl: 'page-contact.html',
          controller: 'contactController'
      })
  
      // about page
      .when('/about', {
          templateUrl: 'page-about.html',
          controller: 'aboutController'
      });
      */
});
  
/*
// CONTROLLERS ============================================
// home page controller
app.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});
*/