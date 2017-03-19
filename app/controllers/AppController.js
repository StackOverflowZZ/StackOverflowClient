app.controller('AppController', function ($scope, $timeout, Feature) {

    $scope.setUser = function (user, isAdmin) {
        $scope.session = user;
        $scope.isAdmin = isAdmin;
    };

    $scope.setFlash = function(message) {
        $scope.flash = message;

        $timeout(function() {
            $scope.flash = null
        }, 5000);
    }

    $scope.init = function(){
        Feature.getAll(function(features) {
            features.forEach(function(f, index){
                features[f.name]=f.enable
            })
            $scope.features = features
        });
    }

    $scope.init();
});