/*
  Blink
  Turns on an LED on for one second, then off for one second, repeatedly.
 
  This example code is in the public domain.
 */

var five = require( 'johnny-five' );
var board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on( 'ready', function() {

  // Pin 13 has an LED connected on most Arduino boards.
  // give it a name:
  var led = 13;

  // Set initial value to off
	var val = 0;

	// Set led pin to OUTPUT mode
	this.pinMode( led, 1 );

	// the loop routine runs over and over again forever to "flash/blink/strobe" an led
	this.loop( 1000, function() {

		this.digitalWrite( led, (val = val ? 0 : 1) );

	});

});