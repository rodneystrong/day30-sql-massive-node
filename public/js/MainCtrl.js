angular
  .module('mikesFront')
  .controller('MainCtrl', function($scope, mainService) {
    $scope.whatevs = 'whatevs';
    console.log($scope.whatevs);

    $scope.getData = function() {
      mainService.getData().then(function(response) {
        $scope.data = response;
      });
    }
  });
