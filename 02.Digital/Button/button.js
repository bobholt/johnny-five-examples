/*
  Button
 
 Turns on and off a light emitting diode(LED) connected to digital  
 pin 13, when pressing a pushbutton attached to pin 2. 
 
 
 The circuit:
 * LED attached from pin 13 to ground 
 * pushbutton attached to pin 2 from +5V
 * 10K resistor attached to pin 2 from ground
 
 * Note: on most Arduinos there is already an LED on the board
 attached to pin 13.
 
 
 created 2005
 by DojoDave <http://www.0j0.org>
 modified 30 Aug 2011
 by Tom Igoe
 ported to Johnny-Five 5 July 2013
 by Bob Holt
 
 This example code is in the public domain.
 
 http://www.arduino.cc/en/Tutorial/Button
 */
var five = require( 'johnny-five' );

// The board's pins will not be accessible until
// the board has reported that it is ready
five.Board().on( 'ready', function() {

  // create the button instance
  var button = new five.Button(2);
  var led = new five.Led({
    pin:13
  });

  // Make sure LED is off to start
  led.off();

  // Listen to button-down event
  button.on('down', function(){
    led.on();
  });

  button.on('up', function(){
    led.off();
  });

});