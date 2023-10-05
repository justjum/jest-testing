const reverseString = require('./reverseString')

test ('first and final letters swapped', () => {
    expect(reverseString('ab')).toBe('ba');
});

test ('all letters reversed', () => {
    expect(reverseString('abcdef')).toBe('fedcba');
});