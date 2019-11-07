angular.module('directiveControlDemo', [])

.controller('MainCtrl', function($scope) {
  $scope.networks = {};
})

.directive('focusin', function factory() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div>A:{{internalControl}} and {{a}}</div>',
    scope: {
      network: '='
    },
    link: function(scope, element, attrs) {
      scope.internalControl = scope.network || {};

      scope.a = 1;

      // self calling function to init
      (function () {
        scope.a += 1;
      }());

      scope.internalControl.takenTablets = 0;


      scope.internalControl.init = function() {
        console.log('init network!');
        scope.internalControl.takenTablets += 1;
      }

    }
  };
});