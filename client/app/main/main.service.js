'use strict';

angular.module('pruebaApp')
  .service('', function ($http) {

    var self=this;

    self.Vercreador=function(callback)
    {
      $http.get('http://greatsource.co/futuro/API/getAll?cedula=1010').
        success(function(data){
          callback(data)
        }).
        error(function(data)
        {alert("error");
        });
    }
  });


