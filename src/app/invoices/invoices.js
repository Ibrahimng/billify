angular.module( 'billify.invoices', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'invoices', {
    url: '/invoices',
    views: {
      "main": {
        controller: 'InvoicesCtrl',
        templateUrl: 'invoices/index.tpl.html'
      }
    },
    data: { pageTitle: 'Invoice' }}
  )
  .state( 'invoices-new', {
    url: '/invoices/new',
    views: {
      "main": {
        controller: 'NewInvoiceCtrl',
        templateUrl: 'invoices/new.tpl.html'
      }
    },
    data:{ pageTitle: 'New invoice' }
  });
})

.controller( 'InvoicesCtrl', function($scope) {
  $scope.invoices = JSON.parse(localStorage.getItem('invoices') || "[]");
})
.controller( 'NewInvoiceCtrl', function InvoicesCtrl( $scope, Client ) {
  // This is simple a demo for UI Boostrap.
  $scope.lineItems = [
    { title: 'AngularJS Entwicklung',
      description: '(Stundenweise)',
      units: 140,
      pricePerUnit: 62.50 },
    { title: 'Bespassung',
      description: '(Stundenweise)',
      units: 2,
      pricePerUnit: 25 }
  ];

  $scope.clients = Client.findAll();
  $scope.invoice = { clientId: _.values($scope.clients)[0].id };
  $scope.sumNetto = function() {
    return _.reduce($scope.lineItems, function(akk, item) {
      return akk + 1 * (item.units * item.pricePerUnit);
    }, 0);
  };

  $scope.addItem = function() {
    $scope.lineItems.push({
      title: 'New item',
      description: '...',
      units: 1,
      pricePerUnit: 1,
      nn: true
    });
  };
})

;
