* GIF Du Jour *

GIF Du Jour is a jQuery plugin I built as a class project at General Assembly Web Development Immersive. The plugin uses the Giphy API to return the most recent GIF in a category specified by the user.

** Install **

Add '$('.gif-container').gifDuJour();' to a JavaScript file to call the plugin on a given DOM element.

GIF Du Jour supplies Gifs from the movie Amelie by default, but you can specify your own category like this:

    $('.gif-container').gifDuJour({
      	category: 'Amelie'
    });