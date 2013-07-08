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
	var led = new five.Led({
		pin: 13
	});

	// the loop routine runs over and over again forever to "flash/blink/strobe" an led
	board.loop( 1000, function() {
		led.toggle();
	});

});