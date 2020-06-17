export const Log = (...params) => {
    if (__DEV__) console.log({...params});
  };
  