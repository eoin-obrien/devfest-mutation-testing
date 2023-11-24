const triangleType = require("./index.js");

// Oops! The scalene test is failing. Let's fix it.
describe("triangleType", () => {
  it("throws an error if given negative sides", () => {
    expect(() => triangleType(-1, 2, 3)).toThrow();
  });

  it("throws an error if given sides that cannot form a triangle", () => {
    expect(() => triangleType(1, 2, 3)).toThrow();
  });

  it('returns "equilateral" if given three equal sides', () => {
    expect(triangleType(1, 1, 1)).toEqual("equilateral");
  });

  it('returns "isosceles" if given two equal sides', () => {
    expect(triangleType(2, 2, 1)).toEqual("isosceles");
  });

  it('returns "scalene" if given three unequal sides', () => {
    // This test was failing before because the sides didn't form a triangle.
    expect(triangleType(2, 3, 4)).toEqual("scalene");
  });
});
