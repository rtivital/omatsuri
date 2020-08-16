import React, { useState } from 'react';
import useDocumentTitle from '../../hooks/use-document-title';
import Settings from './Settings/Settings';

export default function PageDividers() {
  useDocumentTitle('Curved page dividers');

  const [type, setType] = useState('waves');

  return (
    <div>
      <Settings values={{ type }} handlers={{ onTypeChange: setType }} />
    </div>
  );
}
