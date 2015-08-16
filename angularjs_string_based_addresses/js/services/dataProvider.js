app.factory('dataProvider', ['$http', function ($http) {
    return $http.get('https://api.myjson.com/bins/2g8cg')
        .success(function (data) {
            return data;
        });
}]);
