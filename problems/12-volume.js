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
const recVolume = (h) => {
  let calls = 0;
  let vol = h;

  return (d) => {
    calls++;

    if ( calls > 2) {
      return vol;
    } else if ( calls === 2 ) {
      vol *= d;
      return vol
    } else {
      vol *= d;
      return () => {};
    }
  }
}

let test = recVolume(5);
console.log(test(4));
console.log(test(3)); //60
console.log(test(3));
console.log(test(3));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}