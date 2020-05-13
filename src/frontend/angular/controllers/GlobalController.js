myapp.controller('GlobalController',
    function ($rootScope, $scope) {


        $scope.showCloseAnchor = false;

        $scope.showCloseLink = function(){
            $scope.showCloseAnchor = !$scope.showCloseAnchor;
            console.log($scope.showCloseAnchor);
        }

    });