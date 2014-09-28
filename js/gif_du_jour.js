// my plugin
(function ($) {
  $.fn.gifDuJour = function ( options ) {

    var settings = $.extend({
      category: 'Amelie'}, options );
    var key = settings.category;
    var gifImg = '';
    var self = this;
    var clickCounter = 0;
    $.getJSON("http://api.giphy.com/v1/gifs/search?q=" + key + "&api_key=dc6zaTOxFJmzC&limit=100", function( res ) {
      gifImg = res.data[0].images.original.url;
      self.html("<img src=\'" + gifImg + "\' />");
      $('.gif-controls').html("<button id='next'>Next</button><button id='previous'>Previous</button>");

      $("#next").on("click", function (event) {
      event.preventDefault();
      clickCounter++;
      gifImg = res.data[clickCounter].images.original.url;
      self.html("<img src=\'" + gifImg + "\' />");
      })

      $("#previous").on("click", function (event) {
      event.preventDefault();
      clickCounter--;
      gifImg = res.data[clickCounter].images.original.url;
      self.html("<img src=\'" + gifImg + "\' />");
      })
    });
    
    return self;
     };
  })(jQuery);
// end of my plugin



