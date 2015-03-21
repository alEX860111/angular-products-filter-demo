var app = angular.module("myapp", []);

app.controller("myctrl", ["$scope", function($scope) {
    $scope.products = [{
        name: "product1",
        manufacturer: "A",
        state: "live"
    }, {
        name: "product2",
        manufacturer: "A",
        state: "wait"
    }, {
        name: "product3",
        manufacturer: "B",
        state: "wait"
    }];
    $scope.manufacturers = _.uniq(_.pluck($scope.products, "manufacturer"));
    $scope.selManufacturers = $scope.manufacturers;
    $scope.states = _.uniq(_.pluck($scope.products, "state"));
    $scope.selStates = $scope.states;
    $scope.filterProduct = function(product) {
        console.dir(product);
        return _.includes($scope.selManufacturers, product.manufacturer) && _.includes($scope.selStates, product.state);
    };
}]);
