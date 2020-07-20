myapp.controller('GlobalController',
    function ($rootScope, $scope) {


        $scope.showCloseAnchor = false;

        $scope.showCloseLink = function(){
            $scope.showCloseAnchor = !$scope.showCloseAnchor;
            console.log($scope.showCloseAnchor);
        }

        $scope.goTo = (divId) => {
            $('body, html').animate({ scrollTop: $(divId).offset().top }, 800);
        };


    });