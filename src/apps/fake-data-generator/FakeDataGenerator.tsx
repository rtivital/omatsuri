import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import { useDocumentTitle, useLocalStorage } from '@hooks';
import Settings from './Settings/Settings';
import Output from './Output/Output';

const INITIAL_VALUES = {
  fields: [
    { name: 'name', type: 'name', key: v4() },
    { name: 'birthday', type: 'date', key: v4() },
    { name: 'phone', type: 'phone', key: v4() },
    { name: 'zip', type: 'zip', key: v4() },
    { name: 'city', type: 'city', key: v4() },
    { name: 'email', type: 'email', key: v4() },
  ],
  amount: 10,
  type: 'default',
};

export default function FakeDataGenerator() {
  useDocumentTitle('Fake data generator');

  const ls = useLocalStorage({ key: '@omatsuri/fake-data-generator', delay: 1000 });
  const initialValues = ls.retrieve() || INITIAL_VALUES;

  const [fields, setFields] = useState(initialValues.fields);
  const [amount, setAmount] = useState(initialValues.amount);
  const [type, setType] = useState(initialValues.type);
  const [seed, setSeed] = useState(null);
  const regenerate = () => setSeed(v4());

  useEffect(() => {
    ls.save({ fields, amount, type });
    return ls.cancel;
  }, [type, amount, fields]);

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
