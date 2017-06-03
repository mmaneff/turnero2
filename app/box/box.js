(function () {
    'use strict';

    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('box', ['ngRoute'])
        .controller('BoxCtrl', BoxCtrl);

    BoxCtrl.$inject = ['$scope'];
    function BoxCtrl($scope) {

        var vm = this;
        //vm.boxes = [];




    }

})();