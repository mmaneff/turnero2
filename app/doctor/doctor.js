(function () {
    'use strict';

    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('doctor', ['ngRoute'])
        .controller('DoctorCtrl', DoctorCtrl);

    //https://www.w3schools.com/w3css/w3css_slideshow.asp
    DoctorCtrl.$inject = ['$scope'];
    function DoctorCtrl($scope) {

        var vm = this;

        vm.boxes = [];
        vm.box = {};

        vm.boxes = [
            {id:1, numero:'01'},
            {id:2, numero:'02'},
            {id:3, numero:'03'},
            {id:4, numero:'04'}
        ]

        vm.box = vm.boxes[0];

    }

})();