import React from 'react';
import useDocumentTitle from '../../hooks/use-document-title';
import Settings from './Settings/Settings';

export default function FakeDataGenerator() {
  useDocumentTitle('Fake data generator');

  return (
    <div>
      <Settings />
    </div>
  );
}
