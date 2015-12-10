(function() {
  'use strict';

  angular
    .module('application')
    .controller('ModuleController', ModuleController);

  // module dependencies
  ModuleController.$inject = [];

  /**
   * @ngdoc controller
   * @name ModuleController
   * @description
   * Example of controller
   */
  function ModuleController() {
    var vm = this;

    vm.greeting = 'Hello!!!!';

  }
})();
