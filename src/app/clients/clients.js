angular.module( 'billify.clients', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
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

.controller( 'ClientsCtrl', function ($scope) {

  var saveClients = function() {
    localStorage.setItem('clients', JSON.stringify($scope.clients));
    console.log('saving', $scope.clients);
  };

  $scope.clients = JSON.parse(localStorage.getItem('clients', $scope.clients, JSON.stringify([]))) || [];

  $scope.newClient = { name:'', address:'' };

  $scope.addClient = function() {
    $scope.clients.push(_.clone($scope.newClient));
    saveClients();
  };

  $scope.removeClient = function(index) {
    delete $scope.clients[index];
    $scope.clients = _.compact($scope.clients);
    saveClients();
  };

})
;
