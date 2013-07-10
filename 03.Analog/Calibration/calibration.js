/*
  Calibration
 
 Demonstrates one technique for calibrating sensor input.  The
 sensor readings during the first five seconds of the sketch
 execution define the minimum and maximum of expected values
 attached to the sensor pin.
 
 The sensor minimum and maximum initial values may seem backwards.
 Initially, you set the minimum high and listen for anything 
 lower, saving it as the new minimum. Likewise, you set the
 maximum low and listen for anything higher as the new maximum.
 
 The circuit:
 * Analog sensor (potentiometer will do) attached to analog input 0
 * LED attached from digital pin 9 to ground
 
 created 29 Oct 2008
 By David A Mellis
 modified 30 Aug 2011
 By Tom Igoe
 ported to Johnny-Five 10 July 2013
 by Bob Holt
 
 http://arduino.cc/en/Tutorial/Calibration
 
 This example code is in the public domain.
 
 */

var five = require( 'johnny-five' );
var board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on( 'ready', function() {

  // pin that the sensor is attached to
  var SENSOR_PIN = 'A0';

  // pin that the LED is attached to
  var LED_PIN = 9;

  // the sensor value
  var sensorValue = 0;

  // minimum sensor value
  var sensorMin = 1023;

  // maximum sensor value
  var sensorMax = 0;

  var led13 = new five.Led( 13 );
  var led = new five.Led( LED_PIN );
  var photo = new five.Sensor({
    pin: SENSOR_PIN,
    freq: 1
  });

  var future = Date.now() + 5000;

  // read the sensor:
  photo.on('read', function() {
    sensorValue = this.value;
    sensorMax = Math.max( sensorMax, sensorValue );
    sensorMin = Math.min( sensorMin, sensorValue );

    led.brightness( (sensorValue - sensorMin) * 255 / (sensorMax - sensorMin) );

  });

});