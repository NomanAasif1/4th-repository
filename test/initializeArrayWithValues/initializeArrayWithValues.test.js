const expect = require('expect');
const initializeArrayWithValues = require('./initializeArrayWithValues.js');


  test('initializeArrayWithValues is a Function', () => {
  expect(initializeArrayWithValues).toBeInstanceOf(Function);
});
  test('Initializes and fills an array with the specified values', () => {
  expect(initializeArrayWithValues(5, 2), [2, 2, 2, 2).toEqual(2])
});
  
