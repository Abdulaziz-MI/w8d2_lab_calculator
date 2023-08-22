const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expect(sum(10000,20000)).toBe(30000)
  });

  test('can add two negative numbers', () => {
    expect(sum(-10000,-20000)).toBe(-30000)
  });

  test('can add zero', () => {
    expect(sum(0,20000)).toBe(20000)
    
  });

});

describe('subtract', () => {

  test('can subtract two large positive numbers', () => { 
    expect(subtract(20000,10000)).toBe(10000)
  });

  test('can subtract two negative numbers', () => { 
    expect(subtract(-20000,-10000)).toBe(-10000)
  });

  test('can subtract zero', () => { 
    expect(subtract(0,10000)).toBe(-10000)
  });

});

describe('multiply  number', () => {


  test('can multiply two positive numbers', () => { 
    expect(multiply(20000,5)).toBe(100000)
  });

  test('can multiply two negative numbers', () => { 
    expect(multiply(-20000,-100)).toBe(2000000)
  });

  test('can multiply zero', () => { 
    expect(multiply(0,10000)).toBe(0)
  });


});

describe('divide', () => {

  test('can divide two positive numbers', () => { 
    expect(divide(20000,2)).toBe(10000)
  });

  test('can divide two positive numbers', () => { 
    expect(divide(-10000,2)).toBe(-5000)
  });


  test('can divide two negative numbers', () => { 
    expect(divide(-20000,-2)).toBe(10000)
  });

  test('can divide zero', () => { 
    expect(divide(0,10000)).toBe(0)
  });

});

describe('modulus', () => {

  

  test('can modulo two even numbers', () => { 
    expect(modulus(16,10)).toBe(6)
  });

  test('can modulo two odd numbers', () => { 
    expect(modulus(15,6)).toBe(3)
  });

  test('can modulo zero', () => { 
    expect(modulus(0,10000)).toBe(0)
  });


});

describe('even', () => {


  test('can check if positive number is even', () => { 
    expect(even(20000)).toBe(true)
  });
  test('can check if positive number is not even', () => { 
    expect(even(20001)).toBe(false)
  });

  test('can check if negative numbers is even ', () => { 
    expect(even(-2)).toBe(true)
  });

  test('can check if zero is even', () => { 
    expect(even(0)).toBe(true)
  });
});

describe('odd', () => {
  expect(odd(20000)).toBe(false)

  test('can check if positive number is odd', () => { 
    expect(odd(20000)).toBe(false)
  });
  test('can check if positive number is not odd', () => { 
    expect(odd(20001)).toBe(true)
  });

  test('can check if negative numbers is odd ', () => { 
    expect(odd(-2)).toBe(false)
  });

  test('can check if zero is odd', () => { 
    expect(odd(0)).toBe(false)
  });

});
