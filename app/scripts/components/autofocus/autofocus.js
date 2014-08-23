angular.module('autofocus', [])
  .constant('AUTOFOCUS_DELAY', 250)
  .directive('autofocus', function(AUTOFOCUS_DELAY){
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        setTimeout(function(){
          element.focus()
        }, AUTOFOCUS_DELAY)
      }
    }
  })
