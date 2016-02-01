app.controller('MainController', ['$scope', function($scope) {
 $scope.mapCenter = {
 lat: 50.511722,
  lng: 30.609441,
  zoom: 17
 };
  $scope.mapMarkers = [
  {
    lat: 50.511622,
    lng: 30.609441,
    message: "Me here"
  }/*,
  {
    lat: 40.7425,
    lng: -74.006111,
    message: "Chelsea Market"
  }*/
  ]
}]);