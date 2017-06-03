(function () {
    'use strict';

    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('cliente', ['ngRoute'])
        .controller('ClienteCtrl', ClienteCtrl);

    //https://www.w3schools.com/w3css/w3css_slideshow.asp
    ClienteCtrl.$inject = ['$scope'];
    function ClienteCtrl($scope) {

        var vm = this;

    }

})();