const { persistence } = require("../src/index");

describe('the persistence canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('persistence', () => {
  it('should return 0 for input equal to 4', () => {
    expect(persistence(4)).toBe(0);
  });
});
