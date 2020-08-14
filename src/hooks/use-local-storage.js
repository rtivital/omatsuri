import { useState } from 'react';

export default function useLocalStorage({ key, delay }) {
  const [saved, setSaved] = useState(true);
  const [saveTimeout, setSaveTimeout] = useState(null);

  const save = (values) => {
    global.clearTimeout(saveTimeout);

    const timeout = setTimeout(() => {
      try {
        global.localStorage.setItem(key, JSON.stringify(values));
        setSaved(true);
      } catch (e) {
        setSaved(false);
      }
    }, delay);

    setSaveTimeout(timeout);
  };

  const clean = () => {
    global.clearTimeout(saveTimeout);
    localStorage.removeItem(key);
  };

  const retrieve = () => {
    try {
      return JSON.parse(global.localStorage.getItem(key));
    } catch (e) {
      return null;
    }
  };

  const retrieveAndClean = () => {
    const value = retrieve();
    clean();
    return value;
  };

  return { saved, save, clean, retrieveAndClean, retrieve };
}
