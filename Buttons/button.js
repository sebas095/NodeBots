const five = require('johnny-five');
const board = new five.Board();

board.on('ready', function() {
  var button = new five.Button(2);

  button.on('hold', function() {
    console.log("Button held");
  });

  button.on('press', function() {
    console.log("Button pressed");
  });

  button.on('release', function() {
    console.log("Button released");
  });
});
