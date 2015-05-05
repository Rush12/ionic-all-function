angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource,ApiEndpoint) {
    return $resource(ApiEndpoint.url+'sessions/:sessionId');
})

.factory('Api', function($http, ApiEndpoint) {
  console.log('ApiEndpoint', ApiEndpoint)

  var getApiData = function() {
  	alert(ApiEndpoint.url + 'sessions')
    return $http.get(ApiEndpoint.url + 'sessions')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getApiData: getApiData
  };
});
