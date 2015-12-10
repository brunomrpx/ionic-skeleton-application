(function() {
  'use strict';

  angular
  .module('application', ['ionic'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('module', {
        url: '/module',
        templateUrl: 'templates/module/module.html',
        controller: 'ModuleController as vm'
      });
    $urlRouterProvider.otherwise('/module');
  })
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
})();
