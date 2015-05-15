angular.module( 'billify.models')
.factory('Client', function() {

  var saveClients = function() {
    localStorage.setItem('clients', JSON.stringify(_clients));
  };

  var _clients = JSON.parse(localStorage.getItem('clients') || JSON.stringify({}));

  return {
    findAll: function() {
      return _clients;
    },
    find: function(id) {
      return _clients[id];
    },
    add: function(client) {
      var key = Math.random() * 10000000;
      _clients[key] = _.extend(client, { id: key});
      saveClients();
      return key;
    },
    remove: function(id) {
      delete _clients[id];
      _.compact(_clients);
      saveClients();
    }
  };
})
;
