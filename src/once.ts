// type FNType = <T>() => T;

const once = <FNType extends (...args: any[]) => any>(fn: FNType) => {
  let done = false;
  return ((...args: Parameters<FNType>) => {
    if (!done) {
      done = true;
      return fn(...args);
    }
  }) as FNType;
};

export default once;
