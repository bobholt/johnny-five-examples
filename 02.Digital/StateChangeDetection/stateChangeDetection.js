/*
  State change detection (edge detection)

 Often, you don't need to know the state of a digital input all the time,
 but you just need to know when the input changes from one state to another.
 For example, you want to know when a button goes from OFF to ON.  This is called
 state change detection, or edge detection.
 
 This example shows how to detect when a button or button changes from off to on
 and on to off.

 The circuit:
 * pushbutton attached to pin 2 from +5V
 * 10K resistor attached to pin 2 from ground
 * LED attached from pin 13 to ground (or use the built-in LED on
   most Arduino boards)
 
 created  27 Sep 2005
 modified 30 Aug 2011
 by Tom Igoe
 ported to Johnny-Five 5 July 2013
 by Bob Holt

This example code is in the public domain.

 http://arduino.cc/en/Tutorial/ButtonStateChange
 
 */

// Evented JavaScript handles state change much easier than the Arduino.cc example

var five = require( 'johnny-five' );

// The board's pins will not be accessible until
// the board has reported that it is ready
five.Board().on( 'ready', function() {

  // create the button instance
  var button = new five.Button(2);
  var led = new five.Led({
    pin:13
  });

  var buttonPushCounter = 0;

  // Make sure LED is off to start
  led.on();

  // Listen to button-down event
  button.on('down', function(){

    buttonPushCounter++;
    console.log('on');
    console.log('number of button pushes: ' + buttonPushCounter);

    if (buttonPushCounter % 4 === 0) {
      led.on();
    } else {
      led.off();
    }

  });

  button.on('up', function(){
    console.log('off');
  });

});