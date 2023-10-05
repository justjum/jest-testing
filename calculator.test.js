const calculator = require('./calculator')

test ('add two numbers', () => {
    expect(calculator.add(1,2)).toBe(3);
});
