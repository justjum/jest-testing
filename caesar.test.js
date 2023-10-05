const caesar = require('./caesar');

test ('basic shift', () => {
    expect(caesar('abc',2)).toBe('cde')
});
