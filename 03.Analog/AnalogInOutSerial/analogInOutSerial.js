/*
  Analog input, analog output, serial output
 
 Reads an analog input pin, maps the result to a range from 0 to 255
 and uses the result to set the pulsewidth modulation (PWM) of an output pin.
 Also prints the results to the serial monitor.
 
 The circuit:
 * potentiometer connected to analog pin 0.
   Center pin of the potentiometer goes to the analog pin.
   side pins of the potentiometer go to +5V and ground
 * LED connected from digital pin 9 to ground
 
 created 29 Dec. 2008
 modified 9 Apr 2012
 by Tom Igoe
 ported to Johnny-Five 10 July 2013
 by Bob Holt
 
 This example code is in the public domain.
 
 */

var five = require( 'johnny-five' );
var board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on( 'ready', function() {

  var ANALOG_IN_PIN = 'A0';
  var ANALOG_OUT_PIN = 9;

  var sensorValue = 0;
  var outputValue = 0;

  // Create a standard `led` hardware instance
  var led = new five.Led( ANALOG_OUT_PIN );

  var pot = new five.Sensor({
    pin: ANALOG_IN_PIN,
    freq: 2
  });

  pot.on('read', function( err, value ) {

    // read the analog in value:
    sensorValue = this.value;

    // map it to the range of the analog out:
    outputValue = sensorValue * 255 / 1023;

    led.brightness( outputValue );

    // print the results to the serial monitor:
    console.log( "sensor = " + sensorValue + "\t output = " + outputValue );

  });

});