/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

const recVolume = height => {
  let calls = 0; //how many times has it been called
  let volume = height;  // volume = height * width * length

  return (d) => { // returned function
    calls++;  // count how many calls

    if ( calls > 2 ) { //if we've already had all dimension entered
      return volume;
    } else if ( calls === 2 ) { // if this is final dimension
      volume *= d; // multiply area (h * w) by length
      return volume;
    } else { // first dimension entered
      volume *=d; // multiply height * width
      return () => {}; //return a function for the specs
    }
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}