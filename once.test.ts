import once from "./src/once";

describe("once", () => {
  it('without "once", a function always runs', () => {
    const myFunc = jest.fn();
    myFunc();
    myFunc();
    myFunc();

    expect(myFunc).toHaveBeenCalledTimes(3);
  });

  it('with "once", a function runs one time', () => {
    const myFunc = jest.fn();
    const onceFn = jest.fn(once(myFunc));
    onceFn();
    onceFn();
    onceFn();
    expect(onceFn).toHaveBeenCalledTimes(3);
    expect(myFunc).toHaveBeenCalledTimes(1);
  });
});
