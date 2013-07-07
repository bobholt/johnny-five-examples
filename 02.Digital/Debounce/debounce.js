/* 
 Debounce
 
 Each time the input pin goes from LOW to HIGH (e.g. because of a push-button
 press), the output pin is toggled from LOW to HIGH or HIGH to LOW.  There's
 a minimum delay between toggles to debounce the circuit (i.e. to ignore
 noise).  
 
 The circuit:
 * LED attached from pin 13 to ground
 * pushbutton attached from pin 2 to +5V
 * 10K resistor attached from pin 2 to ground
 
 * Note: On most Arduino boards, there is already an LED on the board
 connected to pin 13, so you don't need any extra components for this example.
 
 
 created 21 November 2006
 by David A. Mellis
 modified 30 Aug 2011
 by Limor Fried
 modified 28 Dec 2012
 by Mike Walters
 ported to Johnny-Five 5 July 2013
 by Bob Holt
 
 This example code is in the public domain.
 
 http://www.arduino.cc/en/Tutorial/Debounce
 */

var five = require( 'johnny-five' );

// The board's pins will not be accessible until
// the board has reported that it is ready
five.Board().on( 'ready', function() {

  // create the button instance
  var button = new five.Button(2);
  var led = new five.Led({
    pin: 13
  });

  var ledState = 'off';

  // the last time the output pin was toggled
  var lastDebounceTime = Date.now();

  // the debounce time; increase if the output flickers
  var debounceDelay = 50;

  // set initial LED state
  led[ledState]();

  // Listen to button-down event
  button.on('down', function(){

    var now = Date.now();

    if ( (now - lastDebounceTime) > debounceDelay ) {

      ledState = ledState === 'off' ? 'on' : 'off';

      led[ledState]();

      lastDebounceTime = now();

    }
  });
});