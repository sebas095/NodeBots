const five = require('johnny-five');
const myStepper = require('./myStepper');
const board = new five.Board();
var n = 1200;

board.on('ready', function() {
  // Motor #1
  var led1 = new five.Led(8);
  var led2 = new five.Led(9);
  var led3 = new five.Led(10);
  var led4 = new five.Led(11);
  var state = [led1, led2, led3, led4];
  var stepper = new myStepper.Stepper(state);

  // Motor #2
  var led5 = new five.Led(4);
  var led6 = new five.Led(5);
  var led7 = new five.Led(6);
  var led8 = new five.Led(7);
  var state2 = [led5, led6, led7, led8];
  var stepper2 = new myStepper.Stepper(state2);

  var button1 = new five.Button(2);
  var button2 = new five.Button(3);

  button1.on('press', function() {
    //console.log("Start");
    console.log("Motor #1");
    stepper.step(0, n, 0);
  });

  button2.on('press', function() {
    console.log("Motor #2");
    stepper2.step(0, n, 0);
    //n += 200;
    //if (n == 2800) n = 200;
  });
});
