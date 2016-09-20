/**
 * This file adds some LIVE to the Theme Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and 
 * then make any necessary changes to the page using jQuery.
 */
( function( $ ) {

	// Update the site title in real time...
	// wp.customize( 'blogname', function( value ) {
	// 	value.bind( function( newval ) {
	// 		$( '#site-title a' ).html( newval );
	// 	} );
	// } );
	
	// //Update the site description in real time...
	// wp.customize( 'blogdescription', function( value ) {
	// 	value.bind( function( newval ) {
	// 		$( '.site-description' ).html( newval );
	// 	} );
	// } );

	// //Update site title color in real time...
	// wp.customize( 'header_textcolor', function( value ) {
	// 	value.bind( function( newval ) {
	// 		$('#site-title a').css('color', newval );
	// 	} );
	// } );

	// //Update site background color...
	wp.customize( 'background_color', function( value ) {
		value.bind( function( newval ) {
			$('body').css('background-color', newval );
		} );
	} );
	
	//Update site link color in real time...
	wp.customize( 'link_textcolor', function( value ) {
		value.bind( function( newval ) {
			$('a').css('color', newval );
		} );
	} );

	wp.customize( 'hx_textcolor', function( value ) {
		value.bind( function( newval ) {
			$('h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, .heading').css('color', newval );
		} );
	} );

	// wp.customize( 'heading', function( value ) {
	// 	value.bind( function( newval ) {
	// 		console.log(newval);
	// 		$('h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, .heading').css('font-family', newval );
	// 	} );
	// } );

	// wp.customize( 'custom_css', function( value ) {
	// 	value.bind( function( newval ) {
	// 		$('a').css('color', newval );
	// 	} );
	// } );
	

	// $( '.customize-control-checkbox input[type="checkbox"]' ).on(
	// 	'change',
	// 	function() {

	// 		var elementLi = $( this ).parents( '.customize-control' );

	// 		console.log(elementLi);

	// 		var checkbox_values = elementLi.find( 'input[type="checkbox"]:checked' ).map(
	// 			function() {
	// 				return this.value;
	// 			}
	// 		);

	// 		console.log(checkbox_values);

	// 		// checkbox_values = $( this ).parents( '.customize-control' ).find( 'input[type="checkbox"]:checked' ).map(
	// 		//		function() {
	// 		//			return this.value;
	// 		//		}
	// 		//	).get().join( ',' );

	// 		// $( this ).parents( '.customize-control' ).find( 'input[type="hidden"]' ).val( checkbox_values ).trigger( 'change' );
	// 		// 
	// 		elementLi.find( 'input[type="hidden"]' ).val( checkbox_values ).trigger( 'change' );
	// 	}
	// );
// console.log("hola datevid");
//     $( ".customize-control-select-multiple select" ).on(
//         "change",
//         function() {

//             var checkbox_values = $( this ).parents( '.customize-control' ).find( 'select:selected' ).map(
//                 function() {
//                     return this.value;
//                 }
//             ).get().join( ',' );

//             $( this ).parents( '.customize-control' ).find( 'select' ).val( checkbox_values ).trigger( 'change' );
//         }
//     );
} )( jQuery );

// jQuery( document ).ready( function() {
// 	console.log("hola datevid");
// 	jQuery( '.customize-control-checkbox input[type="checkbox"]' ).on(
// 		'change',
// 		function() {
// 			var elementLi = jQuery( this ).parents( '.customize-control' );
// 			console.log(elementLi);
// 			var checkbox_values = elementLi.find( 'input[type="checkbox"]:checked' ).map(
// 				function() {
// 					return this.value;
// 				}
// 			);
// 			console.log(checkbox_values);
// 			// checkbox_values = jQuery( this ).parents( '.customize-control' ).find( 'input[type="checkbox"]:checked' ).map(
// 			//		function() {
// 			//			return this.value;
// 			//		}
// 			//	).get().join( ',' );
// 			// jQuery( this ).parents( '.customize-control' ).find( 'input[type="hidden"]' ).val( checkbox_values ).trigger( 'change' );
// 			// 
// 			elementLi.find( 'input[type="hidden"]' ).val( checkbox_values ).trigger( 'change' );
// 		}
// 	);
// } ); // jQuery( document ).ready