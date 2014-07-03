angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function () {
    Links.getLinks($scope.data).then(function (resp) {
      $scope.data.links = resp.data;
      console.log('getting Links');
      console.dir(resp);
    });
  };

  $scope.getLinks();
});

