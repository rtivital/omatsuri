import { useState } from 'react';

export default function useLocalStorage({ key, delay }) {
  const [saved, setSaved] = useState(true);
  const [saveTimeout, setSaveTimeout] = useState(null);

  const save = values => {
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

  const retrieve = () => {
    try {
      return JSON.parse(global.localStorage.getItem(key));
    } catch (e) {
      return null;
    }
  };

  return { saved, save, retrieve };
}
