(function() {
  'use strict';

  angular
    .module('application')
    .controller('ModuleController', ModuleController);

  // module dependencies
  ModuleController.$inject = [];

  function ModuleController() {
    var vm = this;

    vm.greeting = 'Hello!!!!';

  }
})();
