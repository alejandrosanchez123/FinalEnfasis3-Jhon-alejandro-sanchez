'use strict';
angular.module('pruebaApp')
  .controller('MainCtrl', function ($scope,VerCreador) {
    var init = function() {
      Ver.Vercreador(callbackdatos);
    };
    var callbackdatos = function(data){
      $scope.informaciones = data;
    };
    init();
  });

