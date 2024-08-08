import { fib, fib2, fib3, roundFix2 } from ".";

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
    expect(fib3(0)).toBe(0);
  });

  it("should return 1 if fib(1)", () => {
    expect(fib3(1)).toBe(1);
  });

  it("should return 1 if fib(2)", () => {
    expect(fib3(2)).toBe(1);
  });

  it("should return 4 if fib(3)", () => {
    expect(fib3(3)).toBe(2);
  });
});

describe("roundFix2", () => {
  it("should round 5.6 => 5 if difference is 0", () => {
    const [acc, num] = roundFix2([0.0, 5.6]);

    expect(acc).toBeCloseTo(0.6);
    expect(num).toBe(5);
  });

  it("should round 5.5 => 6 if difference is 0.41", () => {
    const [acc, num] = roundFix2([0.41, 5.5]);

    expect(acc).toBeCloseTo(-0.09);
    expect(num).toBe(6);
  });

  it("should round 5.5 => 5 if difference is -0.41", () => {
    const [acc, num] = roundFix2([-0.41, 5.5]);

    expect(acc).toBeCloseTo(0.09);
    expect(num).toBe(5);
  });

  it("should round 5.5 => 6 if difference is 0.5", () => {
    const [acc, num] = roundFix2([0.5, 5.5]);

    expect(acc).toBeCloseTo(0);
    expect(num).toBe(6);
  });
});
