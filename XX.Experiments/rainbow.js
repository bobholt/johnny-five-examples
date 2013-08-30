var five = require("johnny-five");

five.Board().on("ready", function() {


  var b = new five.Led.RGB({
    pins: {
      red: 3,
      green: 5,
      blue: 6
    }
  });

  // Create a standard `led` hardware instance
  led = new five.Led({
    // Use PWM pin 9 for fading example
    pin: 9
  });

    // Create a standard `led` hardware instance
  led2 = new five.Led({
    // Use PWM pin 9 for fading example
    pin: 10
  });

  b.pulse();

  led.pulse();

  led2.pulse();

});
