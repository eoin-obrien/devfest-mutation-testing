const triangleType = require("./index.js");

// Writing tests is boring, so let's get AI to do the work!
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
    expect(triangleType(1, 2, 3)).toEqual("scalene");
  });
});
