/***********************************************************************
// Write a function named `smoothieMachine` that accepts any number of params and
// a function.

// The return function will also accept any number of params and will return a
// string including all of the parameters of smoothieMachine and the return
// function.

// See below for examples:

// let smoothie1 = smoothieMachine();

// console.log(smoothie1("milk"));
// // prints "I'm having a smoothie with milk"
// console.log(smoothie1("kale", "spinach"));
// // prints "I'm having a smoothie with milk and kale and spinach"
// console.log(smoothie1("honey", "pears", "berries"));
// // prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

// let smoothie2 = smoothieMachine("apples", "bananas", "berries");
// console.log(smoothie2("pineapple"));
// // prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

// const smoothieMachine = (...ingredients) => {
  // let string = "I'm having a smoothie with"

  // if ( ingredients.length === 1 ) {
  //   string += ' ' + ingredients[0];
  // } else if ( ingredients.length > 1 ) {
  //   string += ' ' + ingredients.join(' and ');
  // }

  // return (...ings) => {
  //   if ( string.endsWith( 'with' )){
  //     if ( ings.length === 1 ) {
  //       string += ' ' + ings[0];
  //     } else {
  //       string += ' ' + ings.join(' and ');
  //     }
  //   } else {
  //     string += ' and ' + ings.join(' and ');
  //   }
  //   return string;
  // }
// }

// Nate's way
let smoothieMachine = (...items) => {
  let string = "I'm having a smoothie with ";
  return (...ings) => {
    if (!string.endsWith("with ")) {
      string += " and ";
    }
    let list = [...items, ...ings];
    string += list.join(" and ");
    return string;
  };
};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}