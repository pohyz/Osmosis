function checkChar($scope) {
    $scope.change = function(){
        if($scope.bar){
            $scope.left = 2500 - $scope.bar.length;
        }else{
            $scope.left = "";
        }
    };
    $scope.bar = 'Describe your Team';
    $scope.change();
}
