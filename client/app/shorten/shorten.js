angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function (){
    //$scope.loading = true;
    Links.addLink($scope.link).then(function (shortLink) {
      $scope.loading = false;
    });
  };
});
