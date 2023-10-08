const analyzeArray = require('./analyzearray')

const mockFunction = analyzeArray([3,4,5]);

test ('object includes average', () => {
    expect(mockFunction.average).toEqual(4)
})

test ('object includes minimum', () => {
    expect(mockFunction.min).toEqual(3)
});

test ('object includes maximum', () => {
    expect(mockFunction.max).toEqual(5)
});

test ('object includes array length', () => {
    expect(mockFunction.length).toEqual(3)
});
