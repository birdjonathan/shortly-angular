angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function (){
    $scope.loading = true;
    Links.addLink($scope.link)
      .then(function () {
        $location.path('/links');
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        $scope.loading = false;
        $scope.shortlyForm.$setPristine();
        $scope.link = {};
      });
  };
});

