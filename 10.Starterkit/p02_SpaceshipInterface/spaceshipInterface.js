/*
  Spaceship Interface
  Lights LED 3 (green). When the switch is closed, blinks LEDs 4 and 5 (red).
 
  Copyright 2013 Bob Holt
  CC BY-NC-SA 3.0

  Based on Spaceship Interface (C++) Copyright 2012 Arduino, LLC
  https://creativecommons.org/licenses/by-nc-sa/3.0/us/

 */

var five = require( 'johnny-five' );

// The board's pins will not be accessible until
// the board has reported that it is ready
five.Board().on( 'ready', function() {

  // Instead of interacting with the pins directly, use the LED and switch APIs
  var led3 = new five.Led({
    pin: 3
  }).on();

  var led4 = new five.Led({
    pin: 4
  }).off();

  var led5 = new five.Led({
    pin: 5
  }).off();

  var switch2 = new five.Switch({
    pin: 2
  });

  // loop every 0.25 sec
  this.loop( 250, function() {

    // If the button is pushed
    if ( switch2.isClosed ) {

      // Turn green off
      led3.off();

      // Toggle reds alternately on and off
      if ( led4.isOn ) {
        led4.off();
        led5.on();
      } else {
        led4.on();
        led5.off();
      }

    } else {

      // Turn green back on and reds off
      led3.on();
      led4.off();
      led5.off();
    }
  });
});