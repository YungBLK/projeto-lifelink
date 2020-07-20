myapp.controller('MainController',
    function ($rootScope, $scope, UserServices, Flash) {

         $scope.home = 'active';

         $scope.newsLetterData = {
          email: ''
        }
    
        $scope.submiteNewsletter = function () {

            UserServices.newsletter($scope.newsLetterData)
            .then(function() {
               
              Flash.create('success', 'E-mail cadastrado com sucesso!');
              $scope.newsLetterData.email = '';
            });
        }

    });