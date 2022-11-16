const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let running = 0;

  for (const element of array) {
    running += element;
  }

  return running;
};

const multiply = function(array) {
  let running = 1;

  for (const element of array) {
    running *= element;
  }

  return running;
};

const power = (a, b) => {
  return a ** b;
};

const factorial = function(a) {
	if (a <= 1) {
    return 1;
  } else {
    running = 1;
    for(a; a > 1; a--){
      running *= a;
    }
    return running;
  }
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
