import { useEffect } from 'react';

const DEFAULT_HANDLERS = ['mousedown', 'touchstart'];

export default function useOnClickOutside(ref, handler, handlers = DEFAULT_HANDLERS) {
  const isBrowser = typeof document !== 'undefined';

  useEffect(() => {
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    };

    isBrowser && handlers.forEach((fn) => document.addEventListener(fn, listener));

    return () => {
      isBrowser && handlers.forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref, handler]);
}
