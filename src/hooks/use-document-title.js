import { useLayoutEffect } from 'react';

export default function useDocumentTitle(title) {
  useLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title;
    }
  }, [title]);
}
