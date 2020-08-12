import { useState, useEffect } from 'react';

export default function useLocalStorage({ key, values, delay }) {
  const [saved, setSaved] = useState(true);

  const save = () => {
    try {
      global.localStorage.setItem(key, JSON.stringify(values));
      setSaved(true);
    } catch (e) {
      setSaved(false);
    }
  };

  const retrieve = () => {
    try {
      return JSON.parse(global.localStorage.getItem(key));
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    const timeout = global.setTimeout(save, delay);
    return () => global.clearTimeout(timeout);
  }, []);

  return { saved, save, retrieve };
}
