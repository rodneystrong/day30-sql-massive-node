angular
  .module('mikesFront')
  .controller('MainCtrl', function($scope, mainService) {
    $scope.whatevs = 'whatevs';
    console.log($scope.whatevs);

    //READ/GET
    $scope.getData = function() {
      mainService.getData().then(function(response) {
        $scope.data = response;
      });
    }

    //CREATE/POST
    $scope.createData = function(newInfo, newAge) {
      mainService.createData(newInfo, newAge).then(function(response) {
        $scope.data = response;
      });
    }

    //DELETE
    $scope.deleteData = function(id) {
      mainService.deleteData(id).then(function(response) {
        $scope.getData();
      });
    }

  });
