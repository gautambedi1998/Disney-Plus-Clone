import { sum } from "./sum";

describe("Combined Test", () => {
  it("Checking the sum function", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("Another Math Test", () => {
    const result = sum(1, 1);
    expect(result).toBe(2);
  });
});
