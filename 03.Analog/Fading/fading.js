/*
 Fading
 
 This example shows how to fade an LED using the analogWrite() function.
 
 The circuit:
 * LED attached from digital pin 9 to ground.
 
 Created 1 Nov 2008
 By David A. Mellis
 modified 30 Aug 2011
 By Tom Igoe
 ported to Johnny-Five 10 July 2013
 by Bob Holt
 
 http://arduino.cc/en/Tutorial/Fading
 
 This example code is in the public domain.
 
 */
var five = require( 'johnny-five' );
var board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on( 'ready', function() {

  // Create a standard `led` hardware instance
  led = new five.Led(9);

  // pinMode is set to OUTPUT by default

  // led.pulse handles everything (fadeIn/fadeOut = 255/5*30ms)
  // (255 / 5) * 30ms * 2 = 3060ms
  led.pulse( 3060 );

});