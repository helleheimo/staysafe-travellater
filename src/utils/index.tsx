import { useEffect, useRef } from 'react';

export const debounce = (callback, wait, immediate = false) => {
  let timeout = null;
  return (...args) => {
    const callNow = immediate && !timeout;
    const next = () => callback(...args);
    clearTimeout(timeout);
    timeout = setTimeout(next, wait);
    if (callNow) {
      next();
    }
  };
};

export const useDidMountEffect = (f, d) => {
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) f();
    else didMount.current = true;
  }, d);
};
