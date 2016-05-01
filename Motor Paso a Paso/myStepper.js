function Stepper(state) {
  this.state = state;
  var current = 0;

  this.step = function self(i, n) {
    setTimeout(function() {
      if (i == n) return;
      i++;
      switch(current) {
        case 0:{
          this.state[0].off();
          this.state[1].off();
          this.state[2].off();
          this.state[3].on();
          current = 1;
          break;
        }
        case 1: {
          this.state[0].off();
          this.state[1].off();
          this.state[2].on();
          this.state[3].off();
          current = 2;
          break;
        }
        case 2: {
          this.state[0].off();
          this.state[1].on();
          this.state[2].off();
          this.state[3].off();
          current = 3;
          break;
        }
        case 3: {
          this.state[0].on();
          this.state[1].off();
          this.state[2].off();
          this.state[3].off();
          current = 0;
          break;
        }
        default: {
          this.state[0].off();
          this.state[1].off();
          this.state[2].off();
          this.state[3].on();
          current = 0;
          break;
        }
      }
      console.log("Step: ", i, " State: ", current);
      self(i, n);
    }, 500);
  }
}

module.exports.Stepper = Stepper;
