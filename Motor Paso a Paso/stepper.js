const five = require('johnny-five');
const myStepper = require('./myStepper');
const board = new five.Board();
var n = 200;

board.on('ready', function() {
  var led1 = new five.Led(8);
  var led2 = new five.Led(9);
  var led3 = new five.Led(10);
  var led4 = new five.Led(11);
  var state = [led1, led2, led3, led4];
  var stepper = new myStepper.Stepper(state);
  var button1 = new five.Button(2);
  var button2 = new five.Button(3);

  button1.on('press', function() {
    console.log("Start");
    stepper.step(0, n, 0);
  });

  button2.on('press', function() {
    n += 200;
    if (n == 2800) n = 200;
  });

});
