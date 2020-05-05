import { useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
      console.log('ran');
    }
    if (delay !== 0) {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
}

// eslint-disable-next-line import/prefer-default-export
export { useInterval };
