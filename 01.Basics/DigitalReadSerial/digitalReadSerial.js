/* 
   DigitalReadSerial
   Reads a digital input on pin 2, prints the result to the serial monitor 
 
   This example code is in the public domain.
 */

var five = require( 'johnny-five' );
var board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on( 'ready', function() {

	// digital pin 2 has a pushbutton attached to it. Give it a name:
	var pushButton = 2;

	// set default buttonState of 'open'
	var buttonState = 0;

	// make the pushbutton's pin an input:
	this.pinMode( pushButton, 0 );

	// firmata's digitalRead is actually an eventListener
	// the event is emitted whenever the value changes
	this.digitalRead( pushButton, function(value) {

		// set the buttonState to the current value
		buttonState = value;

	});

	// the loop routine runs over and over again forever:
	this.loop( 1, function() {

		// print out the state of the button:
		console.log(buttonState);

	});

});