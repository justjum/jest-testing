const caesar = require('./caesar');

test ('basic shift', () => {
    expect(caesar('abc',2)).toBe('cde')
});

test ('keeps upper/lower case', () => {
    expect(caesar('aBc',2)).toBe('cDe')
});

test ('shifts beyond z', () => {
    expect(caesar('zZ',2)).toBe('bB');
});

