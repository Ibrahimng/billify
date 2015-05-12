describe('simple_format', function() {
  describe('isCurrentUrl', function() {
    var simple_format;

    beforeEach(module('billify.filters'));

    beforeEach(inject(function($filter) {
      simple_format = $filter('simple_format');
    }));

    it('replaces line breaks with <br /> tags', inject(function() {
      expect(simple_format("Hello\nthere")).toBe("Hello<br />\nthere");
    }));
  });
});
