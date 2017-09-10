angular
  .module('depoApp')
  .controller('bookingController', function ($scope, $state, userService) {

    $scope.reporters = [];
    $scope.reporters['Eleven'] = {
      certNumber: 11,
    }
    $scope.reporters['Nancy Drew'] = {
      certNumber: 9347324,
    }
    $scope.reporters['Kevin Malone'] = {
      certNumber: 375232424,
    }

    $scope.reporters['Meredith Palmer'] = {
      certNumber: 90832323,
    }

    $scope.reporters['Pam Beasley'] = {
      certNumber: 34378934,
    }

    $scope.reporters['Robin Lee'] = {
      certNumber: 4783823242,
    }

    $scope.reporters['James Smith'] = {
      certNumber: 435237237,
    }
    $scope.reporters['Kelly Woods'] = {
      certNumber: 238237237,
    }

    $scope.reporterName = '';
    $scope.certNumber = '';

    $scope.caseName = '';
    $scope.depoLocation = '';
    $scope.depoDateTime = '';

    $scope.firmNames = [];
    $scope.firmNames['Mike, Lucas, and Dustin'] = {
      address: '992 Main Street',
      phone: '847-101-3822',
      email: 'mld@email.com'
    }
    $scope.firmNames['Fiction Law Group'] = {
      address: ' 398 12th Ave',
      phone: '213-543-2332',
      email: 'fiction@email.com'
    }
    $scope.firmNames['Creed Law Group'] = {
      address: '34837 Main Street',
      phone: '474-534-2322',
      email: 'creed@email.com'
    }
    $scope.firmNames['Vance, Schrute, and Martin'] = {
      address: '3893 Nest Ave',
      phone: '833-372-2382',
      email: 'vam@email.com'
    }
    $scope.firmNames['Moe Law Group'] = {
      address: '4783 Evergreen Terrance',
      phone: '643-574-4544',
      email: 'moe@email.com'
    }
    $scope.firmNames['Brooks, Daniels, and Loeb'] = {
      address: '4783 Evergreen Terrance',
      phone: '539-323-7118',
      email: 'bdl@email.com'
    }
    $scope.firmNames['Dale Law Group'] = {
      address: '3746 3rd Street',
      phone: '714-667-8373',
      email: 'dale@email.com'
    }

    $scope.firmName = '';
    $scope.firmAddress = '';
    $scope.firmPhone = '';
    $scope.firmEmail = '';

    $scope.attorneys = [];
    $scope.attorneys['Will Byers'] = {
      email: 'will@email.com',
      phone: '238-232-1911'
    }
    $scope.attorneys['Frank Hardy'] = {
      email: 'frank@email.com',
      phone: '832-101-7422'
    }
    $scope.attorneys['Darryl Philbin'] = {
      email: 'darryl@email.com',
      phone: '476-199-3231'
    }
    $scope.attorneys['Andy Bernard'] = {
      email: 'andy@email.com',
      phone: '872-234-2322'
    }
    $scope.attorneys['Kelly Kapoor'] = {
      email: 'kelly@email.com',
      phone: '938-262-3434'
    }
    $scope.attorneys['Monty Burns'] = {
      email: 'burns@email.com',
      phone: '478-732-0987',
    }
    $scope.attorneys['Stan Brooks'] = {
      email: 'stan@email.com',
      phone: '467-323-2422'
    }
    $scope.attorneys['Bob Jones'] = {
      email: 'bob@email.com',
      phone: '714-930-3223'
    }

    $scope.attorneyName = '';
    $scope.attorneyEmail = '';
    $scope.attorneyPhone = '';

    $scope.speed = '';

    $scope.index = false;
    $scope.condensed = false;
    $scope.full = false;
    $scope.formatSelectAll = false;

    $scope.timeStamp = '';

    $scope.video = false;
    $scope.CD = false;
    $scope.email = false;
    $scope.print = false;
    $scope.deliverySelectAll = false;

    $scope.orderingAttorney = '';

    $scope.numberCopies = '';
    $scope.specialInstruction = '';
    $scope.confidential = '';

    $scope.deliverySelectAll = function () {
      $scope.video = $scope.deliverySelectAllValue;
      $scope.CD = $scope.deliverySelectAllValue;
      $scope.email = $scope.deliverySelectAllValue;
      $scope.print = $scope.deliverySelectAllValue;
    }

    $scope.formatSelectAll = function () {
      $scope.index = $scope.formatSelectAllValue;
      $scope.condensed = $scope.formatSelectAllValue;
      $scope.full = $scope.formatSelectAllValue;
    }

    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').focus()
    });

    $scope.getCertNumber = function () {
      $scope.certNumber = $scope.reporters[$scope.reporterName].certNumber;
    }

    $scope.getLawFirmInfo = function () {
      $scope.firmAddress = $scope.firmNames[$scope.firmName].address;
      $scope.firmPhone = $scope.firmNames[$scope.firmName].phone;
      $scope.firmEmail = $scope.firmNames[$scope.firmName].email;

    }
    $scope.getAttorneyInfo = function () {
      $scope.attorneyEmail = $scope.attorneys[$scope.attorneyName].email;
      $scope.attorneyPhone = $scope.attorneys[$scope.attorneyName].phone;
    }

    $scope.addUser = function () {
      userService.addUser($scope.reporterName, $scope.certNumber, $scope.caseName, $scope.depoLocation, $scope.depoDateTime,
        $scope.firmName, $scope.firmAddress, $scope.firmPhone, $scope.firmEmail, $scope.attorneyName,
        $scope.attorneyEmail, $scope.attorneyPhone, $scope.speed, $scope.index,
        $scope.condensed, $scope.full, $scope.timeStamp, $scope.video, $scope.CD, $scope.email, $scope.print, $scope.orderingAttorney,
        $scope.numberCopies, $scope.specialInstruction, $scope.confidential)
      $state.go("workOrder")
    }
    $scope.users = userService.getUsers();
  })
