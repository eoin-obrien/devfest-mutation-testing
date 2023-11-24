const add = require("./add");

// This isn't a very comprehensive test...
describe("add", () => {
  it("adds two numbers", () => {
    expect(add(0, 0)).toEqual(0);
  });
});

// This is better!
// describe("add", () => {
//   it("adds two numbers", () => {
//     expect(add(1, 2)).toEqual(3);
//   });
// });
