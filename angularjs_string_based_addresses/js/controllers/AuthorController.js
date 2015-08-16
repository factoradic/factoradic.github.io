app.controller('AuthorController', ['$scope', 'dataProvider', '$routeParams', function ($scope, dataProvider, $routeParams) {
    dataProvider.success(function (data) {
        /*
         String normalization process.
         I operate on name passed in routeParams, because it's more efficient to parse one string.
         */
        var name = ($routeParams.name).normalize();
        for (var i = 0, l = data.authors.length; i < l; i++) {
            if (data.authors[i].name === name) {
                $scope.author = data.authors[i];
                break;
            }
        }
    });
}]);
