/*
* quickspa - jQuery plugin for quick Single Page Application building
*
* Aleksandar Radovanovic [aleksandar@radovanovic.com] (2017)
*
* Licensed under the MIT license:
* http://www.opensource.org/licenses/mit-license.php
*
*/
(function($) {
 
  $.quickspa = function(options) {

    var settings = $.extend({
      defaultView  : 'home',
      templateDir  : './pages/',
      appId: 'main-app',
      routes:{}
    }, options );

    
    // manage hash change
    var routeChange = function() {
      var id    = location.hash.slice(1);
      var route = settings.routes[id];
      var elm   = $("#"+settings.appId); 

      if( ! elm || ! route) {
        console.log(id+" page not found");
        return;
      }
      elm.empty().load(settings.templateDir+route);
    }

    //  run
    this.run = function() {
      $(window).on('hashchange', function() { routeChange(); });
      if( ! window.location.hash) { window.location.hash = settings.defaultView; } else { routeChange(); }
    }
    return this;
  };
}(jQuery));
