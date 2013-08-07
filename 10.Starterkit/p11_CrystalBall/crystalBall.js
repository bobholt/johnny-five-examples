/*
  Arduino Starter Kit example
 Project 11  - Crystal Ball
 
 This sketch is written to accompany Project 11 in the
 Arduino Starter Kit
 
 Parts required:
 220 ohm resistor
 10 kilohm resistor
 10 kilohm potentiometer
 16x2 LCD screen
 tilt switch
 
 
 Created 13 September 2012
 by Scott Fitzgerald
 Ported to Johnny-Five 7 August 2013
 by Bob Holt
 
 http://arduino.cc/starterKit
 
 This example code is part of the public domain 
 */

// Added functionality to reset the crystal ball after 3 seconds of inactivity

var five = require('johnny-five'),
    board, lcd;

board = new five.Board();

board.on('ready', function() {

  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [ 12, 11, 5, 4, 3, 2 ],

    // Options:
    // bitMode: 4 or 8, defaults to 4
    // lines: number of lines, defaults to 2
    // dots: matrix dimensions, defaults to '5x8'
  });

  lcd.on('ready', function() {

    // set up a constant for the tilt switchPin
    var tiltSwitch = new five.Switch(6);

    // a variable to choose which reply from the crystal ball
    var reply = '';

    resetCrystalBall();

    // Set a delay before listening for switch change, otherwise program blasts through initial phase
    board.wait( 100, function() {
 
      tiltSwitch.on('close', function() {
        // randomly chose a reply
        reply = getRandomBetween(0, 7);
        // clean up the screen before printing a new reply
        lcd.clear();
        // set the cursor to column 0, line 0     
        lcd.setCursor(0, 0);
        // print some text
        lcd.print("the ball says:");
        // move the cursor to the second line
        lcd.setCursor(0, 1);

        // choose a saying to print baed on the value in reply 
        switch(reply){
        case 0:
          lcd.print("Yes");
          break;

        case 1:
          lcd.print("Most likely");
          break;

        case 2:
          lcd.print("Certainly");
          break;

        case 3:
          lcd.print("Outlook good");
          break;

        case 4:
          lcd.print("Unsure");
          break;

        case 5:
          lcd.print("Ask again");
          break;

        case 6:
          lcd.print("Doubtful");
          break;

        case 7:
          lcd.print("No");
          break;
        }

        board.wait( 3000, resetCrystalBall);

      });
    });

    function resetCrystalBall() {

      lcd.clear();
      
      // set the cursor to column 0, line 0
      lcd.setCursor(0, 0);

      // Print a message to the LCD.
      lcd.print("Ask the");

      // set the cursor to column 0, line 1
      // line 1 is the second row, since counting begins with 0
      lcd.setCursor(0, 1);

      // print to the second line
      lcd.print("Crystal Ball!");

    }

    // ### `getRandomBetween`
    // Generates a random integer between two numbers
    // @param min <number> - the minimum number to return
    // @param max <number> - the maximum number to return
    // @returns <number> the integer pseudo-randomly generated >= min and <= max
    function getRandomBetween( min, max ) {
     
      return Math.floor( ( Math.random() * ( max - min + 1 ) ) + min );
     
    }

  });

  this.repl.inject({
    lcd: lcd
  });

});


// @markdown
// [16 x 2 LCD White on Blue](http://www.hacktronics.com/LCDs/16-x-2-LCD-White-on-Blue/flypage.tpl.html)
// [20 x 4 LCD White on Blue](http://www.hacktronics.com/LCDs/20-x-4-LCD-White-on-Blue/flypage.tpl.html)
// @markdown
