/**
 * Send a request.
 * @param $http HTTP Object
 * @param $url URL to reach
 * @param $method Method to use
 * @param $successCallback Callback function if success
 */
var request = function($http, url, method, successCallback) {
    $http({
        method: method,
        url: url
    }).then(successCallback,
        function errorCallback(response) {
        // TODO : Error management, create a flash function on views.
        alert("A problem occured...");
    });
}
