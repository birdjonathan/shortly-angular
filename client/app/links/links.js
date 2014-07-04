angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function () {
    Links.getLinks($scope.data).then(function (resp) {
      $scope.data.links = resp.data;
      $scope.limitTitle();
    });
  $scope.limitTitle = function(){
    for (var i = 0; i < $scope.data.links.length; i++){
     var wordArray = $scope.data.links[i].title.split(' ');
     var limit = 5;
     $scope.data.links[i].title = wordArray.slice(0,limit).join(' ');
    }
  }
  };

  $scope.getLinks();
});

