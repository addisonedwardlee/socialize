'use strict';

angular.module('socialApp.services.profileCreator', [])
  .factory('profileCreator', ['Firebase', 'FBURL', '$rootScope', function(Firebase, FBURL, $rootScope) {
    return function(id, name, email, callback) {
      new Firebase(FBURL).child('users/'+id).set({email: email, name: name}, function(err) {
        if( callback ) {
          callback(err);
          $rootScope.$apply();
        }
      });
    }
  }]);