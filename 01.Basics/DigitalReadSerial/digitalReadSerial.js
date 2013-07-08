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
	var pushButton = new five.Button(2);

	// set default buttonState of 'open'
	var buttonState = board.firmata.LOW;

	function setButtonState() {

		// set the buttonState to the current value
		buttonState = this.isDown ? 1 : 0;

	}

	pushButton.on( 'down', setButtonState );
	pushButton.on( 'up', setButtonState );

	// the loop routine runs over and over again forever:
	board.loop( 1, function() {

		// print out the state of the button:
		console.log(buttonState);

	});

});