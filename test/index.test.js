const { persistence } = require("../src/index");

test("test persistence", () => {
  expect(persistence(0)).toBe(true);
});
