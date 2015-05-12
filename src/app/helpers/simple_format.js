angular.module('billify.filters')
.filter('simple_format', function($sce) {
  return function(text) {
    return $sce.trustAsHtml(text.replace("\n", "<br />\n"));
  };
});

