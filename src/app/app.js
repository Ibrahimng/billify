angular.module('billify.filters', []);

angular.module( 'billify', [
  'templates-app',
  'templates-common',
  'billify.home',
  'billify.about',
  'billify.clients',
  'billify.invoices',
  'billify.filters',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Billify' ;
    }
  });
})

;

