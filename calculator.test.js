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
    expected = 100;
    actual = sum(50, 50);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -7;
    actual = sum(-4, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 6;
    actual = sum(6, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    expected = 4;
    actual = subtract(7, 3);
    expect(actual).toBe(expected);
});

  test('can subtract two large positive numbers', () => {
  expected = 50;
  actual = subtract(100, 50);
  expect(actual).toBe(expected);
});

  test('can subtract two negative numbers', () => {
  expected = -7;
  actual = subtract(-10, -3);
  expect(actual).toBe(expected);
});

  test('can subtract zero', () => {
  expected = 8;
  actual = subtract(8, 0);
  expect(actual).toBe(expected);
});
});

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    expected = 9;
    actual = multiply(1, 9);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => {
    expected = 10000;
    actual = multiply(100, 100);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 12;
    actual = multiply(-4, -3);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(11, 0);
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {
  test('can divide two small positive numbers', () => {
    expected = 2;
    actual = divide(8, 4);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => {
    expected = 100;
    actual = divide(10000, 100);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 2;
    actual = divide(-8, -4);
    expect(actual).toBe(expected);
  });

  test('cannot divide by zero', () => {
    expect(() => divide(8, 0)).toThrow();
  });
});

describe('modulus', () => {
  test('can find modulus of two small positive numbers', () => {
    expected = 2;
    actual = modulus(8, 3);
    expect(actual).toBe(expected);
});

  test('can calculate the modulus of a negative and a positive number', () => {
  expected = -1;
  actual = modulus(-7, 2);
  expect(actual).toBe(expected);
});

describe('even', () => {
  test('can check if a small positive even number is even', () => {
    expected = true;
    actual = even(2);
    expect(actual).toBe(expected);
  });

  test('can check if a small negative odd number is not even', () => {
    expected = false;
    actual = even(-3);
    expect(actual).toBe(expected);
  });
});

describe('odd', () => {
  test('can check if a small positive odd number is odd', () => {
    expected = true;
    actual = odd(3);
    expect(actual).toBe(expected);
  });

  test('can check if a small negative even number is not odd', () => {
    expected = false;
    actual = odd(-2);
    expect(actual).toBe(expected);
  });
});
});