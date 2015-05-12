angular.module('billify.filters')
.filter('simple_format', function() {
  return function(text) {
    return text.replace("\n", "<br />\n");
  };
});

