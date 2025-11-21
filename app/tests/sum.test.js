import sum from "./sum";

it("Checking the sum function", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
