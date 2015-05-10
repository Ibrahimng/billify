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

.controller( 'ClientsCtrl', function ( $scope ) {
  $scope.clients = [];
  $scope.newClient = { name:'', address:'' };

  $scope.addClient = function() {
    $scope.clients.push(_.clone($scope.newClient));
  };

  $scope.removeClient = function(index) {
    delete $scope.clients[index];
    $scope.clients = _.compact($scope.clients);
  };
})
;
