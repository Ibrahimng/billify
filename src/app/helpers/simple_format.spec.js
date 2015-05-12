describe('simple_format', function() {
  var simple_format;

  beforeEach(module('billify.filters'));

  beforeEach(inject(function($filter) {
    simple_format = $filter('simple_format');
  }));

  it('replaces line breaks with <br /> tags', inject(function() {
    var output = simple_format("Hello\nthere");

    expect(output.$$unwrapTrustedValue()).toBe("Hello<br />\nthere");
  }));
});
