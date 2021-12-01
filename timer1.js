// No numbers are provided: no beep
// An input is a negative number: skip
// An input is not a number: skip

// process.argv.slice(2) is array (times)
// create beep function
  // if no numb
    // skip \r
  // if numb is negatice
    // skip \r
  // if no value
    // no beep
  // if value is passed
    // setTimeout to beep based on process.argv val
// setTimeout

// let it beep at first index of array [1,2,3]


let time = process.argv.slice(2)
let beep = function() {
  for (const seconds of time) {
    let numbers = Number(seconds);
    if (numbers < 0 || typeof numbers !== "number" || isNaN(parseFloat(numbers))) {// isNaN checks if the input is a number
      continue;
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, numbers * 1000)
    }
  }
};

beep();

// think in opposite
