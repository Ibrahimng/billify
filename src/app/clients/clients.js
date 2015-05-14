angular.module( 'billify.clients', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'billify.filters'
])

.config(function config($stateProvider) {
  $stateProvider.state( 'clients', {
    url: '/clients',
    views: {
      "main": {
        controller: 'ClientsCtrl',
        templateUrl: 'clients/index.tpl.html'
      }
    },
    data:{ pageTitle: 'Clients overview' }
  });
})

.controller( 'ClientsCtrl', function ($scope, Client) {

  var newClient = function() {
    $scope.newClient = { name:'', address:'' };
  };

  var loadClients = function() {
    $scope.clients = Client.findAll();
  };

  newClient();
  loadClients();

  $scope.addClient = function() {
    Client.add(_.clone($scope.newClient));
    newClient();
    loadClients();
  };

  $scope.removeClient = function(index) {
    Client.remove(id);
    loadClients();
  };
})
;
