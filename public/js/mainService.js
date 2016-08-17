angular
  .module('userApp')
  .service('mainService', function($http) {
      this.callData = function() {
        return $http({
          method: 'GET',
          url: '/users',
        }).then(function(response) {
          return response;
        })
      }
  })
