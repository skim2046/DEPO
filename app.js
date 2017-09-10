var app = angular.module('depoApp', ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider.state("homeView", {
    url: "/",
    templateUrl: "./views/booking.html",
    controller: "bookingController"
  })
    .state("booking", {
      url: "/booking",
      templateUrl: "./views/booking.html",
      controller: "bookingController"
    })
    .state("workOrder", {
      url: "/workOrder",
      templateUrl: "./views/workOrder.html",
      controller: "ordersController"
    })
});