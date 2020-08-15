import { useState } from 'react';

export default function useClipboard({ timeout = 2000 }) {
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] = useState(null);

  const handleCopyResult = (value) => {
    setCopyTimeout(setTimeout(() => setCopied(false), timeout));
    setCopied(value);
  };

  const copy = (valueToCopy) => {
    navigator.clipboard
      .writeText(valueToCopy)
      .then(() => handleCopyResult(true))
      .catch((err) => setError(err));
  };

  const reset = () => {
    setCopied(false);
    setError(null);
    clearTimeout(copyTimeout);
  };

  return { copy, reset, error, copied };
}
