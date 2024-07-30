import { fib, fib2, fib3 } from ".";

describe("fib", () => {
  it("should return 0 if fib(0)", () => {
    expect(fib(0)).toBe(0);
  });

  it("should return 1 if fib(1)", () => {
    expect(fib(1)).toBe(1);
  });

  it("should return 1 if fib(2)", () => {
    expect(fib(2)).toBe(1);
  });

  it("should return 4 if fib(3)", () => {
    expect(fib(3)).toBe(2);
  });
});

describe("fib2", () => {
  it("should return 0 if fib(0)", () => {
    expect(fib2(0)).toBe(0);
  });

  it("should return 1 if fib(1)", () => {
    expect(fib2(1)).toBe(1);
  });

  it("should return 1 if fib(2)", () => {
    expect(fib2(2)).toBe(1);
  });

  it("should return 4 if fib(3)", () => {
    expect(fib2(3)).toBe(2);
  });
});

describe("fib3", () => {
  it("should return 0 if fib(0)", () => {
    expect(fib(0)).toBe(0);
  });

  it("should return 1 if fib(1)", () => {
    expect(fib(1)).toBe(1);
  });

  it("should return 1 if fib(2)", () => {
    expect(fib(2)).toBe(1);
  });

  it("should return 4 if fib(3)", () => {
    expect(fib(3)).toBe(2);
  });
});
