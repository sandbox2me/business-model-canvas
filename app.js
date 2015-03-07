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
      .when('/canvas', {
        redirectTo: '/'
      })  
      .when('/', {
        templateUrl: 'angular/templates/canvas.html',
        controller: 'mainController'
      })
      // contact page
      .when('/contact', {
          templateUrl: 'angular/templates/contact.html',
      })
      // about page
      .when('/about', {
          templateUrl: 'angular/templates/about.html',
      })
      //help
      .when('/help', {
          templateUrl: 'angular/templates/help.html',
      })
      .when('/view/:boxname', {
          templateUrl: 'angular/templates/view.html',
          controller: 'viewController'
      })
      .when('/edit/:boxname', {
          templateUrl: 'angular/templates/edit.html',
          controller: 'viewController'
      })
      .when('/changelog', {
          templateUrl: 'angular/templates/changelog.html',
      })
      //404
      .when('/404', {
          templateUrl: 'angular/templates/404.html',
      })
      .otherwise({
        redirectTo: '404'
      });
});
  

// CONTROLLERS ============================================
// home page controller

app.controller("mainController", function($scope, $routeParams, $location) {
  //Setting up defaults values
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
    $scope.localdata = localData;
  }
});