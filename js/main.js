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

function JsonCtrl($scope, $http){
  $scope.url = "http://www.3i.com/our-people/json";

  $scope.addPeople = function(){
    console.log("gets here: ");
    $http.get($scope.url).then(function(response){
            console.log("response: ",response);
            queries = response.queries;
            $scope.jsonData = queries.nodes.node;
            $scope.message = queries.nodes.node.business;
        });
  };
}
