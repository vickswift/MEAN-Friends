app.factory('friendsFactory', ['$http', '$routeParams', function ($http, $routeParams) {
    let factory = {};
    factory.friends = [];
    factory.friend = {};
    factory.index = function (callback) {
        //call this method if you want to update or set the friends variable
        $http.get('/friends').then(function(returnedData){
            factory.friends = returnedData.data;
            return callback(factory.friends);
        });
    };
    factory.show = function (idx, callback) {
        $http.get('/friends/' + idx).then(function (data) {
            factory.friend = data.data;
            return callback(factory.friend);
        })
    };
    factory.create = function (newFriend, callback) {
        $http.post('/friends', newFriend).then(function (returned_data) {
            factory.friend = returned_data.data;
            if (typeof(callback) == 'function') {
                return callback(returned_data.data);
            }
        })
    };
    factory.update = function (friend, idx, callback) {
        console.log(friend);
        $http.put('/friends/' + idx, {first_name: friend.first_name, last_name: friend.last_name, birthday: friend.birthday})
            .then(function (returned_data) {
            // console.log(returned_data.data);
            if (typeof(callback) == 'function') {
                callback(returned_data.data);
            }
        })
    };
    factory.delete = function (delete_idx) {
        // let delete_idx = $routeParams._id;
        $http.delete('/friends/' + delete_idx)
    };
    return factory;
}]);