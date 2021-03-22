let solution = require('../solution');

test('Breaking camelCase..', () => {
    expect(solution('camelCasing')).toBe('camel Casing');
    expect(solution('camelCasingTest')).toBe('camel Casing Test');
})
