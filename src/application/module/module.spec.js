describe("ModuleController", function() {
  var $controller;

  beforeEach(module('application'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe("$scope.greeting", function() {
    it("should contain a greeting message", function() {
      var $scope = {},
          greeting = 'Welcome!!!',
          controller = $controller('ModuleController', { $scope: $scope });

      $scope.greeting = greeting;
      expect($scope.greeting).toEqual(greeting);
    });
  });
});
