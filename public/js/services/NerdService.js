angular.module('NerdService', []).factory('Nerd', ['$http', function($http){
  return{
     // functions make requests to server, return response
     
     // call to get all NerdService
     get: function(){
        return $http:get('/api/nerds');
     },

     // define more API routes to use these:

     // call to POST and create a new nerd
     create: function(nerdData){
        return $http:post('/api/nerds', nerdData);
     },

     // delete a nerd
     delete: function(id){
        return $http:delete('/api/nerds' + id);
     }
  }
}]);
