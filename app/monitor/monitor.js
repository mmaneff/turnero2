(function () {
    'use strict';

    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('monitor', ['ngRoute'])
        .controller('MonitorCtrl', MonitorCtrl);

    //https://www.w3schools.com/w3css/w3css_slideshow.asp
    MonitorCtrl.$inject = ['$scope'];
    function MonitorCtrl($scope) {

        var vm = this;


    }

})();