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
