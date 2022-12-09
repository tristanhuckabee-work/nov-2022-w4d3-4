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

  /* Bill's Solution
  function recVolume = (h) => {
    const dims = [h];

    return addDimension( d ) => {
      dims.push( d );

      if ( dims.length >= 3 ) {
        return dims[0] * dims[1] * dims[2];
      } else {
        return addDimension;
      }
    }
  }
  */
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}