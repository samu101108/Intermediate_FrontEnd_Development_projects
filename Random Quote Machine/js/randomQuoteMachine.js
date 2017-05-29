
//jQuery function to get API messages
jQuery( function( $ ) {
  //loads the quote on page load
  $(document).ready(function(){
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand',
      success: function ( data ) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $( '#quote-title' ).text( post.title );
        $( '#quote-content' ).html( post.content );
      },
      cache: false //if set to true, the quote don't changes
    } );
  });
  //loads the quote on button click
  $( '#get-another-quote-button' ).on( 'click', function ( e ) {
    e.preventDefault();
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand',
      success: function ( data ) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $( '#quote-title' ).text( post.title );
        $( '#quote-content' ).html( post.content );
      },
      cache: false //if set to true, the quote don't changes
    } );
  } );
} );
