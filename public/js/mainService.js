angular
  .module('mikesFront')
  .service('mainService', function($http) {
    this.getData = function() {
      return $http.get('/users')
        .then(function(response) {
          console.log('mainService response!');
          console.log(response.status);
          console.log(response.data[0].name);
          return response;
        })
    }
})
