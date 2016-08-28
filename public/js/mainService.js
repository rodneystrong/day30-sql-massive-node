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
          return response;
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

    this.deleteData = function(itemId) {
      var promise = $http({
        method: 'DELETE',
        url: ('/users' + 'itemId')
      })
      promise.then(function(response) {
        return response.data;
      }, function(error) {
        if(response.status === 200) {
          return response.data;
        } else {
          throw 'shit happens';
        }
      })
    }
})
