var musicApp = angular.module('musicApp',[]);

//create a service to share data between controllers
musicApp.factory('Data', function(){
  return {message : "I am data from a service"};
});

//the FirstCtrl controller creates a data model that can be referenced in the template
function FirstCtrl($scope, Data){
  $scope.data = Data;
  $scope.kaixo = {message:"Aupa hi!"};
  $scope.hola = {message : "Hola tio"};
}

function SecondCtrl($scope, Data){
  $scope.data = Data;

  $scope.reversedMessage = function(message){
    return message.split("").reverse().join("");
  };
}
function DiscographyCtrl($scope){
  $scope.songs = [
    {"title":"song title 1", "album": "album name 1"},
    {"title":"song title 2", "album": "album name 2"},
    {"title":"song title 3", "album": "album name 3"}
  ];
}

function JSONPctrl($scope, $http) {
  var url = 'https://gdata.youtube.com/feeds/api/users/orbitalofficial/uploads?alt=json-in-script&callback=JSON_CALLBACK';
  $http.jsonp(url).success(function(data) {
      $scope.results = data.feed.entry;
  });
}
