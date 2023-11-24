const triangleType = require("./index.js");

describe("triangleType", () => {
  it("throws an error if given negative sides", () => {
    expect(() => triangleType(-1, 2, 3)).toThrow(
      "All sides must be positive numbers!"
    );
    expect(() => triangleType(1, -2, 3)).toThrow(
      "All sides must be positive numbers!"
    );
    expect(() => triangleType(1, 2, -3)).toThrow(
      "All sides must be positive numbers!"
    );
  });

  it("throws an error if given sides that cannot form a triangle", () => {
    expect(() => triangleType(1, 2, 3)).toThrow(
      "The given sides cannot form a triangle!"
    );
    expect(() => triangleType(1, 3, 2)).toThrow(
      "The given sides cannot form a triangle!"
    );
    expect(() => triangleType(3, 1, 2)).toThrow(
      "The given sides cannot form a triangle!"
    );
  });

  it('returns "equilateral" if given three equal sides', () => {
    expect(triangleType(1, 1, 1)).toEqual("equilateral");
  });

  it('returns "isosceles" if given two equal sides', () => {
    expect(triangleType(2, 2, 1)).toEqual("isosceles");
    expect(triangleType(2, 1, 2)).toEqual("isosceles");
    expect(triangleType(1, 2, 2)).toEqual("isosceles");
  });

  it('returns "scalene" if given three unequal sides', () => {
    expect(triangleType(2, 3, 4)).toEqual("scalene");
  });

  // Test that the function throws an error if given a side of length zero.
  it("throws an error if given a side of length zero", () => {
    expect(() => triangleType(0, 1, 2)).toThrow(
      "All sides must be positive numbers!"
    );
    expect(() => triangleType(1, 0, 2)).toThrow(
      "All sides must be positive numbers!"
    );
    expect(() => triangleType(1, 2, 0)).toThrow(
      "All sides must be positive numbers!"
    );
  });
});
