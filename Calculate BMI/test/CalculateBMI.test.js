let solution = require('../solution1')

test('Testing Calculate BMI with low values', () => {
expect(solution(30, 1.80)).toBe("Underweight");
})
test('Testing Calculate BMI with normal values', () => {
expect(solution(80, 1.80)).toBe("Normal");
})
test('Testing Calculate BMI with high values', () => {
expect(solution(90, 1.82)).toBe("Overweight");
})
test('Testing Calculate BMI with very high values', () => {
expect(solution(110, 1.82)).toBe("Obese");
})
