/*
  Melody
 
 Plays a melody 
 
 circuit:
 * 8-ohm speaker on digital pin 8
 
 created 21 Jan 2010
 modified 30 Aug 2011
 by Tom Igoe 

This example code is in the public domain.
 
 http://arduino.cc/en/Tutorial/Tone
 
 */

var five = require( 'johnny-five' );
var board = new five.Board();
var pitches = require( '../../pitches');

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on( 'ready', function() {

  var speaker = new five.Piezo(9);

  // notes in the melody:
  // note durations: 4 = quarter note, 8 = eighth note, etc.:
  // var melody = [
  //   {
  //     note: pitches.NOTE_C4,
  //     duration: 4
  //   },
  //   {
  //     note: pitches.NOTE_G3,
  //     duration: 8
  //   },
  //   {
  //     note: pitches.NOTE_G3,
  //     duration: 8
  //   },
  //   {
  //     note: pitches.NOTE_A3,
  //     duration: 4
  //   },
  //   {
  //     note: pitches.NOTE_G3,
  //     duration: 4
  //   },
  //   {
  //     note: 0,
  //     duration: 4
  //   },
  //   {
  //     note: pitches.NOTE_B3,
  //     duration: 4
  //   },
  //   {
  //     note: pitches.NOTE_C4,
  //     duration: 4
  //   }
  // ];

  var queue = [
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_B0,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_C1,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_CS1, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_D1,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_DS1, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_E1,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_F1,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_FS1, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_G1,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_GS1, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_A1,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_AS1, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_B1,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_C2,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_CS2, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_D2,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_DS2, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_E2,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_F2,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_FS2, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_G2,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_GS2, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_A2,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_AS2, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_B2,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_C3,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_CS3, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_D3,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_DS3, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_E3,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_F3,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_FS3, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_G3,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_GS3, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_A3,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_AS3, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_B3,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_C4,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_CS4, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_D4,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_DS4, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_E4,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_F4,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_FS4, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_G4,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_GS4, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_A4,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_AS4, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_B4,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_C5,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_CS5, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_D5,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_DS5, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_E5,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_F5,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_FS5, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_G5,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_GS5, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_A5,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_AS5, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_B5,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_C6,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_CS6, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_D6,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_DS6, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_E6,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_F6,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_FS6, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_G6,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_GS6, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_A6,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_AS6, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_B6,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_C7,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_CS7, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_D7,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_DS7, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_E7,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_F7,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_FS7, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_G7,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_GS7, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_A7,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_AS7, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_B7,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_C8,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_CS8, 250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_D8,  250); } },
  { delay: 325, task: function() { speaker.tone(pitches.NOTE_DS8,  250); } }
  ];

  // for ( var tone in melody ) {

  //   queue.push({
  //     delay: 1000 / melody[tone].duration * 1.3,
  //     task: function(){
  //       speaker.tone( melody[tone].note, 1000 / melody[tone].duration );
  //     }
  //   });

  // }

  board.queue(queue);

});