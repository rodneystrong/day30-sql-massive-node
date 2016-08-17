angular
  .module('userApp')
  .controller('MainCtrl', function($scope, mainService) {
    $scope.thisAppBroken = "this app working";

    $scope.getData = function() {
      mainService.callData().then(function(response) {
        $scope.data = response;
      });
    };


  });
