/*

  Smoothing

  Reads repeatedly from an analog input, calculating a running average
  and printing it to the computer.  Keeps ten readings in an array and 
  continually averages them.
  
  The circuit:
    * Analog sensor (potentiometer will do) attached to analog input 0

  Created 22 April 2007
  By David A. Mellis  <dam@mellis.org>
  modified 9 Apr 2012
  by Tom Igoe
  http://www.arduino.cc/en/Tutorial/Smoothing
  ported to Johnny-Five 8 July 2013
  by Bob Holt
  
  This example code is in the public domain.
*/
var five = require( 'johnny-five' );
var board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on( 'ready', function() {

  // Define the number of samples to keep track of.  The higher the number,
  // the more the readings will be smoothed, but the slower the output will
  // respond to the input.
  var NUM_READINGS = 10;

  // the readings from the analog input
  var readings = [];

  // the index of the current reading
  var index = 0;

  // the running total
  var total = 0;

  // the average
  var average = 0;

  // Create a new `potentiometer` hardware instance.
  var potentiometer = new five.Sensor({
    pin: "A0",
    freq: 1
  });

  // initialize all the readings to 0: 
  for (var i = 0; i < NUM_READINGS; i++ ) {
    readings[ i ] = 0;
  }

  // "read" get the current reading from the potentiometer
  potentiometer.on("read", function( err, value ) {

    // add the reading to the array:
    readings.unshift( this.value );

    // add the reading to the total:
    total += this.value;

    // subtract the last reading:
    total -= readings.pop();

    // calculate the average:
    average = total / NUM_READINGS;

    // log the average in the console
    console.log( average );

  });

});