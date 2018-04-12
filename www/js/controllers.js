 angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.serial = {
    number1: null,
    number2: null,
    number3: null,
    number4: null,
    number5: null,
    number6: null,
    number:  null, 
  };

  $scope.logSerial = function() {
    $scope.serial.number1 = $scope.serial.number1.toString()
    $scope.serial.number2 = $scope.serial.number2.toString()
    $scope.serial.number3 = $scope.serial.number3.toString()
    $scope.serial.number4 = $scope.serial.number4.toString()
    $scope.serial.number5 = $scope.serial.number5.toString()
    $scope.serial.number6 = $scope.serial.number6.toString()
    $scope.serial.number  = ($scope.serial.number1 + $scope.serial.number2 + $scope.serial.number3 + $scope.serial.number4 + $scope.serial.number5 + $scope.serial.number6)
    console.log('serial number', $scope.serial.number)
  };
})

.controller('AjaxCtrl', function($scope, $http) {
  $scope.getClick = function(){
    console.log('GET JSON Requested')
    $http.get('./mockData/mockData.json').then(function successCallback(response) {
      $scope.getTest = response.data
      console.log($scope.getTest, 'LALALALA')
    }, function errorCallback(response) {
      console.log('error')
    });
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true,
    toggleTest: false,
    textField: 0,
    checkbox: true,
    range: 50
  };

  $scope.tester = function() {
    console.log(" ")
    console.log("toggleTest:", $scope.settings.toggleTest)
    console.log("textField:", $scope.settings.textField)
    console.log("checkbox:", $scope.settings.checkbox)
    console.log("range:", $scope.settings.range)

  };
})

.controller('MessagesCtrl', function($scope, Messages) {
  $scope.messages = Messages.messagesAll();
});