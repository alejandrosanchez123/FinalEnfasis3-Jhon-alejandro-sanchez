'use strict';

angular.module('pruebaApp')
  .service('Ver', function ($http) {

    var self=this;

    self.VerPaises=function(callback)
    {
      $http.get('http://restcountries.eu/rest/v1/all').
        success(function(data){
          callback(data)
        }).
        error(function(data)
        {alert("error");
        });
    }
  });


