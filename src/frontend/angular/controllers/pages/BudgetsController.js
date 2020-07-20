myapp.controller('BudgetsController',
    function ($rootScope, $scope) {

        $scope.home = 'disable';
        
        $scope.userPrice = 50.00;
        $scope.monthPrice = 1050.00;
        

        $scope.OEM = false;

        $scope.bugde = {
            additional: false,
            useAverage: false,
            eventsNumber: 10,
            userNumber: 10,
        }

        $scope.alarmFactor = $scope.bugde.userNumber / $scope.bugde.eventsNumber;

        $scope.calcAlarmFactor = (eventsNumber, userNumber) =>{
            if($scope.bugde.useAverage){
                $scope.alarmFactor = 0.6 * userNumber;
            }else{
                $scope.alarmFactor = eventsNumber / userNumber;
            } 
            
            calcUserPrice($scope.alarmFactor, $scope.OEM);
            
        }      

        var calcUserPrice = (alarmFactor, oem) => {
                if(oem){
                    $scope.userPrice = 2 * alarmFactor + 10;
                }else{
                    $scope.userPrice = alarmFactor + 10;
                }
                calcMontPrice($scope.userPrice);
        }

        var calcMontPrice = (userPrice) => {
            $scope.monthPrice = 10 * userPrice;
        }
    }); 