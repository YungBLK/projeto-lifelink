myapp.controller('ContactController',
    function ($rootScope, $scope, UserServices) {

        $scope.home = 'disable';

        $scope.showSuccess = false;
        $scope.showErro = false;
    
        $scope.contactData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
    
        var resetForm = function (form) {
          $scope.contactData = {
            name: '',
            email: '',
            subject: '',
            message: ''
          }
          form.$setPristine();
        }
    
        $scope.formAuthenticate = function (form) {
          console.log('$scope.contactData', $scope.contactData);
          $scope.showSuccess = false;
          $scope.showErro = false;
          if (form.$valid) {
            UserServices.contact($scope.contactData)
              .then(function (response) {
                $scope.showSuccess = true;
                resetForm(form);
              })
              .catch(function (response) {
                $scope.showErro = true;
                resetForm(form);
              });
          }
        }



    });