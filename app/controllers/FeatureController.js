app.controller("FeatureController",
    function($scope, $route, $translate, Feature) {

    // Get all questions for index.
    $scope.getFeatures = function() {
        Feature.getAll(function(features) {
            $scope.features = features;
        });
    };

    $scope.toggleFeature = function(feature) {

        feature.enable = !feature.enable
        // Do the update
        Feature.update({featureId: feature.id}, feature, function success() {

            // refresh
            $route.reload()

        }, function error(response) {
            $scope.updateError = $translate.instant('ERROR') + response.status;
        });
    };
});