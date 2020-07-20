myapp.controller('AboutController',
    function ($rootScope, $scope) {

        $scope.home = 'disable';
        
     

        $scope.urlSlidePic = ['/images/barbara.jpg', '/images/hiram.jpg',
         '/images/elisangela.jpg', '/images/Hugo.jpg','/images/catarina.jpg',
         '/images/barbara.jpg']


         $scope.contador = 1;

         $scope.setNextImage = () =>{
            if($scope.contador == 6){
                $scope.contador = 0;
            }
            $scope.contador += 1;

         }

    });