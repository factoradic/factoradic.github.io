app.controller('HomeController', ['$scope', 'dataProvider', function ($scope, dataProvider) {
    dataProvider.success(function (data) {
        $scope.books = data.books;
    });
}]);
