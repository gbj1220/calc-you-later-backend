/******************
 * YOUR CODE HERE *
 ******************/
const calculate = function (num1, num2, sign) {
  if (sign === '+' || sign === 'plus' || sign === 'added to') {
    return Number(num1) + Number(num2);
  } else if (sign === '-' || sign === 'minus' || sign === 'subtracted from') {
    return Number(num1) - Number(num2);
  } else if (sign === 'x' || sign === 'X' || sign === 'times' || sign === 'multiplied by') {
    return Number(num1) * Number(num2);
  } else if (sign === '/' || sign === 'divided by') {
    return Number(num1) / Number(num2);
  } else if (sign === '%' || sign === 'mod' || sign === 'modulus') {
    return Number(num1) % Number(num2);
  } else {
    return "Sorry, that's not a mathematical operation!"
  }

}











/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;
