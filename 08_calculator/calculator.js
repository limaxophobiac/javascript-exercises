const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a -b;
};

const sum = function(numArray) {
	return numArray.reduce((oldsum, newsum) => {return oldsum + newsum}, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((oldsum, newsum) => {return oldsum * newsum}, 1);
};

const power = function(a,b) {
  let c = 1;
  for (i= 0; i < b; i++){
    c *= a;
  }
  return c;
};

const factorial = function(a) {
	let c = 1;
  for (i = 1; i <= a; i++){
    c *= i;
  }
  return c;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
