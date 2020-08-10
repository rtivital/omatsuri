import { useEffect } from 'react';

export default function useDocumentTitle(title) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title;
    }
  }, [title]);
}
