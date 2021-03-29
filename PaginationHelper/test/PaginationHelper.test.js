'use strict';
let solution = require("../index");
// let jest = require('jest');
// let expect = jest.expect;

test("test simple pagination (['a','b','c','d','e','f'], 4) (default)", () => {
    solution = new solution(['a','b','c','d','e','f'], 4);
    expect(solution.pageCount()).toBe(2);
    expect(solution.itemCount()).toBe(6);
    expect(solution.pageItemCount(0)).toBe(4);
    expect(solution.pageItemCount(1)).toBe(2);
    expect(solution.pageItemCount(2)).toBe(-1);
});