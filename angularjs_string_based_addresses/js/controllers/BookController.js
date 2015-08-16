app.controller('BookController', ['$scope', 'dataProvider', '$routeParams', function ($scope, dataProvider, $routeParams) {
    dataProvider.success(function (data) {
        $scope.matchedBooks = data.books.filter(function (obj) {
            return obj.urlName === $routeParams.title;
        });
    });
}]);
