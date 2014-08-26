angular.module('seagull.utils', [])

angular.module('seagull.utils').directive('simpleFormat', function() {
  return {
    restrict: 'EA',
    scope: true,
    template: "<p ng-repeat='lines in paragraphs'>\n  <span ng-repeat='line in lines'>\n    <br ng-hide='$first' />\n    {{ line }}\n  </span>\n</p>",
    link: function(scope, element, attributes) {
      return scope.$watch(attributes.simpleFormat, function(text) {
        var paragraphs;
        scope.paragraphs = [];
        if (text != null) {
          text.replace(/\r\n|\r/g, '\n');
          paragraphs = text.split('\n\n');
          return scope.paragraphs = paragraphs.map(function(lines) {
            return lines.split('\n');
          });
        }
      });
    }
  };
});
