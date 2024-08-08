const fib = (num: number): number => {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fib(num - 2) + fib(num - 1);
};

const cache: number[] = [];
const fib2 = (num: number): number => {
  if (cache[num] === undefined) {
    if (num === 0) {
      cache[num] = 0;
    } else if (num === 1) {
      cache[num] = 1;
    } else {
      cache[num] = fib(num - 2) + fib(num - 1);
    }
  }

  return cache[num];
};

// as closure
const fib3 = (() => {
  const cache: number[] = [];
  return (num: number) => {
    if (cache[num] === undefined) {
      if (num === 0) {
        cache[num] = 0;
      } else if (num === 1) {
        cache[num] = 1;
      } else {
        cache[num] = fib(num - 2) + fib(num - 1);
      }
    }
    return cache[num];
  };
})();

const roundFix2 = (pair: [acc: number, n: number]) => {
  let [acc, n] = pair;
  const nRounded = acc > 0 ? Math.ceil(n) : Math.floor(n);
  acc += n - nRounded;
  return [acc, nRounded];
};

export { fib, fib2, fib3, roundFix2 };
