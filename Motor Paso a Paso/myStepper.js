function Stepper(state) {
  var nstate = state;

  this.step = function self(i, n, current) {
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
          nstate[0].on();
          nstate[1].off();
          nstate[2].off();
          nstate[3].off();
          current = 2;
          break;
        }
        case 2: {
          nstate[0].off();
          nstate[1].off();
          nstate[2].on();
          nstate[3].off();
          current = 3;
          break;
        }
        case 3: {
          nstate[0].off();
          nstate[1].on();
          nstate[2].off();
          nstate[3].off();
          current = 4;
          break;
        }
<<<<<<< HEAD
      }
      console.log("Step: ", i, " State: ", current);
      self(i, n, current);
    }, 0.5);
=======
        default: {
          nstate[0].on();
          nstate[1].off();
          nstate[2].off();
          nstate[3].off();
          current = 0;
          break;
        }
      }
      console.log("Step: ", i, " State: ", current);
      self(i, n);
    }, 200);
>>>>>>> cf7e693418e9b685c2af3450897abc7c74cb0e13
  }
}

module.exports.Stepper = Stepper;

/*
case 0:{
  nstate[0].on();
  nstate[1].off();
  nstate[2].off();
  nstate[3].off();
  current = 1;
  break;
}
case 1: {
  nstate[0].on();
  nstate[1].on();
  nstate[2].off();
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
  nstate[0].off();
  nstate[1].on();
  nstate[2].on();
  nstate[3].off();
  current = 4;
  break;
}
case 4: {
  nstate[0].off();
  nstate[1].off();
  nstate[2].on();
  nstate[3].off();
  current = 5;
  break;
}
case 5: {
  nstate[0].off();
  nstate[1].off();
  nstate[2].on();
  nstate[3].on();
  current = 6;
  break;
}
case 6: {
  nstate[0].off();
  nstate[1].off();
  nstate[2].off();
  nstate[3].on();
  current = 7;
  break;
}
case 7: {
  nstate[0].on();
  nstate[1].off();
  nstate[2].off();
  nstate[3].on();
  current = 0;
  break;
}
default: {
  nstate[0].on();
  nstate[1].off();
  nstate[2].off();
  nstate[3].off();
  current = 0;
  break;
}
*/
