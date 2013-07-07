/*
  AnalogReadSerial
  Reads an analog input on pin 0, prints the result to the serial monitor.
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.
 
 This example code is in the public domain.
 */

var five = require( 'johnny-five' );
var board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on( 'ready', function() {

  // Create a new `potentiometer` hardware instance.
  var potentiometer = new five.Sensor({
    pin: "A0",
    freq: 1
  });

  // "read" get the current reading from the potentiometer
  potentiometer.on("read", function( err, value ) {
    console.log( this.value );
  });
  
});