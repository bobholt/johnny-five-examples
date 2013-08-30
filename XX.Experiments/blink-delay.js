/*
  Blink
  Turns on an LED on for one second, then off for one second, repeatedly.
 
  This example code is in the public domain.
 */

var five = require( 'johnny-five' );
var board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on( 'ready', function() {

  // Pin 13 has an LED connected on most Arduino boards.
  // give it a name:
	var led = new five.Led({
		pin: 13
	});

	board.repl.inject({
		led: led
	});

	// the loop routine runs over and over again forever to "flash/blink/strobe" an led

	board.delay(1000, function() {
		led.on();
	});
	board.delay(1000, function(){
		led.off();
	});
	board.wait(1000, function() {
		led.on();
	});
	board.delay(500, function(){
		led.off();
	});
	board.wait(500, function() {
		led.on();
	});
	board.delay(250, function(){
		led.off();
	});
	board.wait(250, function() {
		led.on();
	});
	board.delay(125, function(){
		led.off();
	});
	board.wait(125, function() {
		led.on();
	});
	board.delay(50, function(){
		led.off();
	});
	board.wait(50, function() {
		led.on();
	});
	board.delay(25, function(){
		led.off();
	});
	board.wait(25, function() {
		led.on();
	});

});