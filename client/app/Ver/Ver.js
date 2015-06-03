'use strict';

angular.module('pruebaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Ver', {
        url: '/Ver',
        templateUrl: 'app/Ver/Ver.html',
        controller: 'VerCtrl'
      });
  });