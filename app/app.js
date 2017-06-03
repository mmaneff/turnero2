(function () {
  'use strict';

// Declare app level module which depends on views, and components
  angular.module('turnero', ['oc.lazyLoad',
    'ngRoute',
    'ngAnimate',
    'angular-jwt',
    'auth0',
    'acUtils',
    'modBoxes',
    'modTurnos',
    'acAbmBoxes',
    'acAbmTurnos',
    'acAbmDoctores',
    'monitorTurnos'
  ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/monitor'});


    $routeProvider.when('/doctor', {
      templateUrl: 'doctor/doctor.html',
      controller: 'DoctorCtrl',
      //data: {requiresLogin: false},
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load('doctor/doctor.js');
        }]
      }
    });

    $routeProvider.when('/monitor', {
      templateUrl: 'monitor/monitor.html',
      controller: 'MonitorCtrl',
      //data: {requiresLogin: false},
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load('monitor/monitor.js');
        }]
      }
    });

    $routeProvider.when('/box', {
        templateUrl: 'box/box.html',
        controller: 'BoxCtrl',
        //data: {requiresLogin: false},
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load('box/box.js');
            }]
        }
    });

    $routeProvider.when('/cliente', {
        templateUrl: 'cliente/cliente.html',
        controller: 'ClienteCtrl',
        //data: {requiresLogin: false},
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                // you can lazy load files for an existing module
                return $ocLazyLoad.load('cliente/cliente.js');
            }]
        }
    });

  }]).controller('AppCtrl', AppCtrl);


  AppCtrl.$inject = ['$scope'];
  function AppCtrl($scope) {

    var vm = this;
    vm.hideLoader = true;
    vm.isCollapsed = true;


    //FUNCIONES
    vm.toggleCollapse = toggleCollapse;


    function toggleCollapse() {
      vm.isCollapsed = !vm.isCollapsed;
    }


  }

})();
