'use strict';
angular.module('pruebaApp')
  .controller('VerCtrl', function ($scope,Ver) {

    var init = function() {
      Ver.VerPaises(callbackdatos);
    };
    var callbackdatos = function(data){
      $scope.informacion = data;
    };
    init();
  });

