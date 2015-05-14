angular.module( 'billify.models')
.factory('Client', function($localStorage) {

  var saveClients = function() {
    $scope.clients = JSON.parse($localStorage.getItem('clients', $scope.clients, JSON.stringify([]))) || [];
    $localStorage.setItem('clients', JSON.stringify($scope.clients));
  };

  var _clients = JSON.parse($localStorage.getItem('clients') || JSON.stringify([]));

  return {
    findAll: function() {
      return _.map(_clients, function(client) {
                     return _.merge(client, { id: client.id });
                  });
    },
    find: function(id) {
      return _clients[id];
    },
    add: function(client) {
      var key = Math.random() * 10000000;
      _clients[key] = client;
      saveClients();
      return key;
    },
    remove: function(id) {
      delete clients[key];
      _.compact(clients);
      saveClients();
    }
  };
})
;
