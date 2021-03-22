let solution = require('../solution2');

test ('Simple test', () => {
expect(solution("Welcome")).toBe('emocleW')
});
test ('Test with mixing words (with length < 5 and length >= 5)', () => {
expect(solution("Hey fellow warriors")).toBe('Hey wollef sroirraw')
});
test ('Length checking test', () => {
expect(solution("This is a test")).toBe('This is a test')
});
test ('Second mixing test', () => {
expect(solution("This is another test")).toBe('This is rehtona test')
});
test ('Simple test', () => {
expect(solution("Seriously this is the last one")).toBe('ylsuoireS this is the last one')
});
