angular
  .module('mikesFront')
  .service('mainService', function($http) {

    //GET or read
    this.getData = function() {
      return $http.get('/users')
        .then(function(response) {
          console.log('mainService response!');
          console.log(response.status);
          console.log(response.data[1]);
          console.log(response.data[0]);
          console.log(response.data);
          return response.data;
        })
    }

    //POST or create
    // this.createData = function() {
    //   return $http.put('url')
    // }
    // this.createData = function (newInfo) {
    //   console.log(newInfo);
    //  return $http.post('/users', newInfo)
    //   .then(function (response) {
    //      return response.data;
    //  });
    // };
    //
    this.createData = function(newInfo, newAge) {
      console.log(newInfo, newAge);
      console.log(typeof(newInfo, newAge));
      return $http({
        method: 'POST',
        url: '/users',
        data: {
          name: newInfo,
          age: newAge
        }
      })
      .then(function(response) {
        return response.data;
      })
    }

    //DELETE
    this.deleteData = function(id) {
      return $http({
        method: 'DELETE',
        url: ('/users/' + id)
      })
      .then(function(response) {
        return response;
      })
    }

})
