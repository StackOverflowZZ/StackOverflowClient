app.factory('User', function($resource, API_URL, Session) {

    // Define Question resource
    var userResource = $resource(API_URL + '/user/:userId', {questionId: '@id'},
    {
        create: {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + Session.getAccessToken(),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function(data) {
                var key, result = [], response;
                if(typeof data == "string") {
                    response = data;
                } else {
                    for (key in data) {
                        if (data.hasOwnProperty(key)) {
                            result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
                        }
                    }
                    response = result.join("&");
                }
                return response;
            }
        }
    });

    return userResource;
});