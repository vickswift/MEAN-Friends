app.controller('EditController', ['friendsFactory', '$routeParams', '$scope', function (friendsFactory, $routeParams, $scope) {
    $scope.friend = {};
    let show = function () {
        let idx = $routeParams._id;
        friendsFactory.show(idx, function (data) {
            $scope.friend = data;
        })
    };
    show();
    $scope.updateFriend = {};
    $scope.update = function () {
        console.log('clicked update');
        let idx = $routeParams._id;
        console.log(idx);
        if (!$scope.updateFriend.first_name || !$scope.updateFriend.last_name || !$scope.updateFriend.birthday) {
            console.log('missing fields');
        }
        else {
            friendsFactory.update($scope.updateFriend, idx, function () {
              console.log("Updated to", $scope.updateFriend);
                $scope.updateFriend = null;
            });
        }

        // if (typeof(callback) == 'function') {
        //     callback($scope.updateFriend);
        // }
    }
}]);
