const { persistence, separateDigits } = require("../src/index");

describe('the persistence canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('persistence', () => {
  it('should return 0 for input equal to 4', () => {
    expect(persistence(4)).toBe(0);
  });
  it('should return 1 for input equal to 10', () => {
    expect(persistence(10)).toBe(1);
  });
  it('should return 3 for input equal to 39', () => {
    expect(persistence(39)).toBe(3);
  });
  it('should return 4 for input equal to 999', () => {
    expect(persistence(999)).toBe(4);
  });
});

describe('separateDigits', () => {
  it('should return [4] for input equal to 4', () => {
    expect(separateDigits(4)).toStrictEqual([4]);
  });
  it('should return [1, 0] for input equal to 10', () => {
    expect(separateDigits(10)).toStrictEqual([1, 0]);
  });
});