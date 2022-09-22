const countdown = ['blast off!', 'one!', 'two!', 'three!']
// The bug:
for (let i = 3; i < countdown.length; i--) {
  console.log(countdown[i])
}


//
// What problem-solving techniques did you use?
//


/*
  for ( x; y; z ) { ... }
    x: <starting value>
    y: <keep iterating if condition is true>
    z: <change x after each loop iteration>
*/
// Simplify the problem, what does it look
// like if we fill in the variables?
for (3; 3 < 4; 3) {
  // do stuff
}


// Try some real code:
function do_a_loop() {
  for (let i = 3; i != 0; i--) {
    console.log('hello ' + i)
  }
}

do_a_loop()
/*
  Outputs:
    hello 3
    hello 2
    hello 1
*/


//
// What did you learn?
//


// pseudo-code of how the for loop condition works:
if (condition_is_true()) {
  iterate_loop()
} else {
  stop_loop()
}


// Visualizing the loop iterations with pseudo-code:
if ( 3 < 4) { ... } // true, Loop!
if ( 2 < 4) { ... } // true, Loop!
if ( 1 < 4) { ... } // true, Loop!
if ( 0 < 4) { ... } // true, Loop!
if (-1 < 4) { ... } // true, Loop!
if (-2 < 4) { ... } // true, Loop!
// ..to infinity, and beyond!