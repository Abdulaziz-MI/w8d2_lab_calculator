const sum = function(a, b){
    return a + b;
};

const subtract = (a, b) => a-b;

const multiply = (a, b) => a*b;

const divide = (a, b) => a/b;

const modulus = (a, b) => a%b;

const even = (a) => (a%2 == 0);

const odd = (a, b) => (a%2 != 0);

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
