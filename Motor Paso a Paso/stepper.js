const five = require('johnny-five');
const board = new five.Board();
var state = 0;
var led1, led2, led3, led4;

board.on('ready', function() {
  led1 = new five.Led(11);
  led2 = new five.Led(10);
  led3 = new five.Led(9);
  led4 = new five.Led(8);
  var button1 = new five.Button(2);
  //var button2 = new five.Button(4);
  var start = false;

  button1.on('press', function() {
    console.log("Start");
    motorPAP(0, 50);
  });
});

function motorPAP(i, n) {
  setTimeout(function() {
    if (i == n) return;
    i++;
    
    switch(state) {
      case 0: {
        led1.off();
        led2.off();
        led3.off();
        led4.on();
        state = 1;
        break;
      }
      case 1: {
        led1.off();
        led2.off();
        led3.on();
        led4.off();
        state = 2;
        break;
      }
      case 2: {
        led1.off();
        led2.on();
        led3.off();
        led4.off();
        state = 3;
        break;
      }
      case 3: {
        led1.on();
        led2.off();
        led3.off();
        led4.off();
        state = 0;
        break;
      }
      default: {
        led1.off();
        led2.off();
        led3.off();
        led4.on();
        state = 1;
        break;
      }
    }
    console.log("Step: ", i, " State: ", state);
    motorPAP(i, n);
  }, 300);
}
