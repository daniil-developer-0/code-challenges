var bouncingBall = require('../solution1.js');

test('Testing Bouncing ball with small values..', () => {
    expect(bouncingBall(3.0, 0.66, 1.5)).toBe(3)
})
test('Testing Bouncing ball with high values..', () => {
    expect(bouncingBall(30, 0.66, 1.5)).toBe(15)
})
