const Calculator = require('./calculator')


test ('add two integers', () => {
    const calc = new Calculator();
    expect(calc.add(1,2)).toEqual(3);
});

test ('subtract two integers', () => {
    const calc = new Calculator();
    expect(calc.subtract(2,1)).toEqual(1);
})

test ('multiply two integers', () => {
    const calc = new Calculator();
    expect(calc.multiply(2,3)).toEqual(6);
});

test ('divide two integers', () => {
    const calc = new Calculator();
    expect(calc.divide(6,3)).toEqual(2);
});

