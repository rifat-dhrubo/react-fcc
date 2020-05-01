import { useRef, useEffect } from 'react';

const usePrevious = (state) => {
  const ref = useRef('');

  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
};

// eslint-disable-next-line import/prefer-default-export
export { usePrevious };
