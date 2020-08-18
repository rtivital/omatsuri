import React, { useState } from 'react';
import { v4 } from 'uuid';
import useDocumentTitle from '../../hooks/use-document-title';
import Settings from './Settings/Settings';
import Output from './Output/Output';

const DEFAULT_FIELDS = [
  { name: 'name', type: 'name', key: v4() },
  { name: 'birthday', type: 'date', key: v4() },
  { name: 'phone', type: 'phone', key: v4() },
  { name: 'zip', type: 'zip', key: v4() },
  { name: 'city', type: 'city', key: v4() },
  { name: 'email', type: 'email', key: v4() },
];

export default function FakeDataGenerator() {
  useDocumentTitle('Fake data generator');

  const [fields, setFields] = useState(DEFAULT_FIELDS);
  const [amount, setAmount] = useState(10);
  const [type, setType] = useState('default');
  const [seed, setSeed] = useState(null);
  const regenerate = () => setSeed(v4());

  const addField = () =>
    setFields((current) => [...current, { name: '', type: 'name', key: v4() }]);

  const removeField = (index) =>
    setFields((current) => {
      const cloned = [...current];
      cloned.splice(index, 1);
      return cloned;
    });

  const setFieldProp = (index, prop, value) =>
    setFields((current) => {
      const cloned = [...current];
      cloned[index] = { ...cloned[index], [prop]: value };
      return cloned;
    });

  return (
    <div>
      <Settings
        type={type}
        onTypeChange={setType}
        amount={amount}
        fields={fields}
        onFieldAdd={addField}
        onFieldRemove={removeField}
        onFieldPropChange={setFieldProp}
        onAmountChange={setAmount}
        onRegenerate={regenerate}
      />
      <Output fields={fields} amount={amount} type={type} seed={seed} />
    </div>
  );
}
