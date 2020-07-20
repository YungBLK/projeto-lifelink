myapp.service('UserServices', ['$http', function ($http) {

    const API = '/api/user/';

    /**
     * CONTACT
     */
    this.contact = function (data) {
      console.log('data:', data);
      return $http.post(`${API}contact`, data);
    };


    this.newsletter = function (data) {
      console.log('Service data:', data);

      return $http.post(`${API}newsletter`, data);
    };
  
  
  }]);
  