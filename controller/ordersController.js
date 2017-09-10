angular
  .module('depoApp')
  .controller('ordersController', function ($scope, userService) { 

    $scope.users = userService.getUsers()

  })