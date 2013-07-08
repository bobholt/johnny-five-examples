/*
 Input Pullup Serial
 
 This example demonstrates the use of pinMode(INPUT_PULLUP). It reads a 
 digital input on pin 2 and prints the results to the serial monitor.
 
 The circuit: 
 * Momentary switch attached from pin 2 to ground 
 * Built-in LED on pin 13
 
 Unlike pinMode(INPUT), there is no pull-down resistor necessary. An internal 
 20K-ohm resistor is pulled to 5V. This configuration causes the input to 
 read HIGH when the switch is open, and LOW when it is closed. 
 
 created 14 March 2012
 by Scott Fitzgerald
 ported to Johnny-Five 7 July 2013
 by Bob Holt
 
 http://www.arduino.cc/en/Tutorial/InputPullupSerial
 
 This example code is in the public domain
 
 */
var five = require( 'johnny-five' );
var board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on( 'ready', function() {

  var buttonPin = 2;
  var ledPin = 13;
  var sensorVal = 0;

  // Let's not use Button and Led instances, to prove that the pullup works
  this.pinMode( buttonPin, this.firmata.MODES.INPUT );
  this.pinMode( ledPin, this.firmata.MODES.OUTPUT );

  // Firmata does not accept the INPUT_PULLUP pin mode
  // So, the button's pin's internal pull-up resistor is disabled
  // We can enable it by sending a digitalWrite HIGH to that INPUT pin.
  // http://arduino.cc/en/Reference/DigitalWrite
  this.digitalWrite( buttonPin, board.firmata.HIGH );

  // firmata's digitalRead is actually an eventListener
  // the event is emitted whenever the value changes
  this.digitalRead( buttonPin, function(value) {

    // set the sensorVal to the current value
    sensorVal = value;

    // Keep in mind the pullup means the pushbutton's
    // logic is inverted. It goes HIGH when it's open,
    // and LOW when it's pressed. Turn on pin 13 when the 
    // button's pressed, and off when it's not:
    if ( sensorVal ) {
      this.digitalWrite( ledPin, board.firmata.LOW );
    } else {
      this.digitalWrite( ledPin, board.firmata.HIGH );
    }

  });

  // the loop routine runs over and over again forever:
  this.loop( 1, function() {

    // print out the state of the button:
    console.log(sensorVal);

  });

});