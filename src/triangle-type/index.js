/**
 * Given three side lengths, determines if a triangle is equilateral, isosceles, or scalene.
 * Also checks that the given sides are positive numbers and can form a triangle.
 * @throws {Error} If the given sides cannot form a triangle.
 * @param {number} a The length of the first side.
 * @param {number} b The length of the second side.
 * @param {number} c The length of the third side.
 * @returns {string} The type of triangle.
 */
function triangleType(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error("All sides must be positive numbers!");
    } else if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error("The given sides cannot form a triangle!");
    } else if (a === b && b === c) {
      return "equilateral";
    } else if (a === b || b === c || c === a) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
  
  module.exports = triangleType;