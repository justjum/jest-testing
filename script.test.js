const capitalize = require('./script')

test ('first letter is capitalized', () => {
    expect(capitalize('a')).toBe('A');
});

test ('second letter is not capitalized', () => {
    expect(capitalize('an')).toBe('An');
});

