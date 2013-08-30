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

five.Board().on( 'ready', function() {

  var buttonPin = 2;
  var ledPin = 13;

  var button = new five.Button({
    pin: buttonPin,
    isPullup: true
  });

  var led = new five.Led({
    pin: ledPin
  });

  button.on('down', function(value){
    led.on();
  });

  button.on('up', function(){
    led.off();
  });
  
});