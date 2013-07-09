/*
  Analog Input
 Demonstrates analog input by reading an analog sensor on analog pin 0 and
 turning on and off a light emitting diode(LED)  connected to digital pin 13. 
 The amount of time the LED will be on and off depends on
 the value obtained by analogRead(). 
 
 The circuit:
 * Potentiometer attached to analog input 0
 * center pin of the potentiometer to the analog pin
 * one side pin (either one) to ground
 * the other side pin to +5V
 * LED anode (long leg) attached to digital output 13
 * LED cathode (short leg) attached to ground
 
 * Note: because most Arduinos have a built-in LED attached 
 to pin 13 on the board, the LED is optional.
 
 
 Created by David Cuartielles
 modified 30 Aug 2011
 By Tom Igoe
 ported to Johnny-Five 8 July 2013
 by Bob Holt
 
 This example code is in the public domain.
 
 http://arduino.cc/en/Tutorial/AnalogInput
 
 */

var five = require( 'johnny-five' );
var board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on( 'ready', function() {

  var sensorValue = 0;

  // Create a new `potentiometer` hardware instance.
  var potentiometer = new five.Sensor({
    pin: "A0",
    freq: 1
  });

  // Pin 13 has an LED connected on most Arduino boards.
  // give it a name:
  var led = new five.Led({
    pin: 13
  });

  // Create a function that lights the LED
  // and waits before calling ledOff
  function ledOn() {
    led.on();
    setTimeout( ledOff, sensorValue );
  }

  // Create a function that turns the LED off
  // and waits before calling ledOn
  function ledOff() {
    led.off();
    setTimeout( ledOn, sensorValue);
  }

  // "read" get the current reading from the potentiometer
  potentiometer.on("read", function( err, value ) {
    sensorValue = this.value;
  });

  // call ledOn to kick off the ledOn/ledOff 'loop'
  ledOn();

});