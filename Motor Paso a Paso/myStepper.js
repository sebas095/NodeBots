class Stepper {
  constructor(state) {
    this.state = state;
  }

  step(i, n, current, dir) {
    setTimeout(() => {
      if (i == n) return;
      i++;
      if (dir) {
        switch(current) {
          case 0: {
            this.state[0].off();
            this.state[1].off();
            this.state[2].on();
            this.state[3].on();
            current = 1;
            break;
          }
          case 1: {
            this.state[0].off();
            this.state[1].on();
            this.state[2].on();
            this.state[3].off();
            current = 2;
            break;
          }
          case 2: {
            this.state[0].on();
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
            this.state[3].on();
            current = 0;
            break;
          }
        }
      }

      else if (!dir) {
        // Giro inverso
        switch(current) {
          case 0: {
            this.state[0].on();
            this.state[1].off();
            this.state[2].off();
            this.state[3].on();
            current = 1;
            break;
          }
          case 1: {
            this.state[0].on();
            this.state[1].on();
            this.state[2].off();
            this.state[3].off();
            current = 2;
            break;
          }
          case 2: {
            this.state[0].off();
            this.state[1].on();
            this.state[2].on();
            this.state[3].off();
            current = 3;
            break;
          }
          case 3: {
            this.state[0].off();
            this.state[1].off();
            this.state[2].on();
            this.state[3].on();
            current = 0;
            break;
          }
        }
      }

      console.log("Step: ", i, " State: ", current);
      this.step(i, n, current, dir);
    }, 10);
  }
}

module.exports.Stepper = Stepper;

// function Stepper(state) {
//   var nstate = state;
//
//   this.step = function self(i, n, current, dir) {
//     setTimeout(function() {
//       if (i == n) return;
//       i++;
//       if (dir > 0) {
//         switch(current) {
//           case 0: {
//             nstate[0].off();
//             nstate[1].off();
//             nstate[2].on();
//             nstate[3].on();
//             current = 1;
//             break;
//           }
//           case 1: {
//             nstate[0].off();
//             nstate[1].on();
//             nstate[2].on();
//             nstate[3].off();
//             current = 2;
//             break;
//           }
//           case 2: {
//             nstate[0].on();
//             nstate[1].on();
//             nstate[2].off();
//             nstate[3].off();
//             current = 3;
//             break;
//           }
//           case 3: {
//             nstate[0].on();
//             nstate[1].off();
//             nstate[2].off();
//             nstate[3].on();
//             current = 0;
//             break;
//           }
//         }
//       }
//
//       else if (dir < 0) {
//         // Giro inverso
//         switch(current) {
//           case 0: {
//             nstate[0].on();
//             nstate[1].off();
//             nstate[2].off();
//             nstate[3].on();
//             current = 1;
//             break;
//           }
//           case 1: {
//             nstate[0].on();
//             nstate[1].on();
//             nstate[2].off();
//             nstate[3].off();
//             current = 2;
//             break;
//           }
//           case 2: {
//             nstate[0].off();
//             nstate[1].on();
//             nstate[2].on();
//             nstate[3].off();
//             current = 3;
//             break;
//           }
//           case 3: {
//             nstate[0].off();
//             nstate[1].off();
//             nstate[2].on();
//             nstate[3].on();
//             current = 0;
//             break;
//           }
//         }
//       }
//
//       console.log("Step: ", i, " State: ", current);
//       self(i, n, current, dir);
//     }, 10);
//   }
// }
//
// module.exports.Stepper = Stepper;
