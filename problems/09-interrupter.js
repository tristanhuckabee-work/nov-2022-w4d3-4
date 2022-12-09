/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

const interrupter = word => str => str.split(' ').join(' ' + word + ' ');

//Manuel's Way
// const interrupter = (word) => (str) => {
//   let strArr = str.split(' ');
//   for ( let i = 1; i < strArr.length; i += 2 ) strArr.splice(i, 0, word);
//   return strArr.join(' ');
// }
//const interrupter = (word) => {
  // Terson's Version
  // let func = string => {
  //   let array = string.split(' ');
  //   let array2 = [];

  //   for (let i = 0; i < array.length ; i++) {
  //     let el = array[i];

  //     if (array[i + 1] !== undefined) {
  //       array2.push(el + ' ' + word);
  //     } else if (array[i + 1] === undefined) {
  //       array2.push( el );
  //     }
  //   }

  //   return array2.join(' ');
  // }
  // return func;
// }

let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}