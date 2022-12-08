/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0
***********************************************************************/

// const arrowRestSum = ( ...num ) => num.reduce((a, c) => a + c, 0);   1-liner/10
// const arrowRestSum = ( ...num ) => {
//   return num.reduce((a, c) => {
//     return a + c
//   }, 0);
// }

//10 lego-bricks/10
const arrowRestSum = ( ...num ) => {
  let sum = 0;

  for (let i = 0; i < num.length; i++ ) { 
    let el = num[i];

    sum += el;
  }

  return sum;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  module.exports = null;
}