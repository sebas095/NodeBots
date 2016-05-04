function Stepper(state) {
  var nstate = state;
  var current = 0;

  this.step = function self(i, n) {
    setTimeout(function() {
      if (i == n) return;
      i++;
      switch(current) {
        case 0:{
          nstate[0].off();
          nstate[1].off();
          nstate[2].off();
          nstate[3].on();
          current = 1;
          break;
        }
        case 1: {
          nstate[0].off();
          nstate[1].off();
          nstate[2].on();
          nstate[3].off();
          current = 2;
          break;
        }
        case 2: {
          nstate[0].off();
          nstate[1].on();
          nstate[2].off();
          nstate[3].off();
          current = 3;
          break;
        }
        case 3: {
          nstate[0].on();
          nstate[1].off();
          nstate[2].off();
          nstate[3].off();
          current = 0;
          break;
        }
        default: {
          nstate[0].off();
          nstate[1].off();
          nstate[2].off();
          nstate[3].on();
          current = 0;
          break;
        }
      }
      console.log("Step: ", i, " State: ", current);
      self(i, n);
    }, 300);
  }
}

module.exports.Stepper = Stepper;
