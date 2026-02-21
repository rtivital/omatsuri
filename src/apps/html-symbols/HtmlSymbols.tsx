import React, { useState } from 'react';
import cx from 'clsx';
import { useDocumentTitle, useLocalStorage, useClipboard } from '@hooks';
import { useTheme } from '../../ThemeProvider';
import Background from '../../components/Background/Background';
import Tabs from '../../components/Tabs/Tabs';
import Input from '../../components/Input/Input';
import symbols from './symbols';
import classes from './HtmlSymbols.styles.less';

const typesData = Object.keys(symbols).map((tab) => ({ value: tab, label: tab }));

function searchSymbols(query, type) {
  if (!(type in symbols)) {
    return [];
  }

  if (query.trim().length === 0) {
    return symbols[type].data;
  }

  return symbols[type].fuse.search(query).map(({ item }) => item);
}

export default function HtmlSymbols() {
  useDocumentTitle('Symbols collection');

  const [theme] = useTheme();
  const clipboard = useClipboard({ timeout: 1000 });
  const lsQuery = useLocalStorage({ key: '@omatsuri/html-symbols/search', delay: 200 });
  const lsType = useLocalStorage({ key: '@omatsuri/html-symbols/type', delay: 200 });
  const [query, setQuery] = useState(lsQuery.retrieve() || '');
  const [type, setType] = useState(lsType.retrieve() || 'Most used');
  const [copiedValue, setCopiedValue] = useState(null);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    lsQuery.save(event.target.value);
  };

  const handleTypeChange = (value) => {
    setType(value);
    lsType.save(value);
  };

  const handleCopy = (value) => {
    setCopiedValue(value);
    clipboard.copy(value);
  };

  const results = searchSymbols(query, type).map((item) => (
    <tr className={classes.item} key={item.entity}>
      <td className={classes.name}>{item.name}</td>
      <td>
        <button
          className={cx(classes.control, classes.symbol, {
            [classes.copied]: item.symbol === copiedValue && clipboard.copied,
          })}
          type="button"
          onClick={() => handleCopy(item.symbol)}
        >
          {item.symbol}
        </button>
      </td>

      <td>
        <button
          className={cx(classes.control, {
            [classes.copied]: item.entity === copiedValue && clipboard.copied,
          })}
          type="button"
          onClick={() => handleCopy(item.entity)}
        >
          {item.entity}
        </button>
      </td>

      <td>
        <button
          className={cx(classes.control, {
            [classes.copied]: item.css === copiedValue && clipboard.copied,
          })}
          type="button"
          onClick={() => handleCopy(item.css)}
        >
          {item.css}
        </button>
      </td>
    </tr>
  ));

  return (
    <Background className={cx(classes.wrapper, classes[theme])}>
      <div className={classes.inputWrapper}>
        <Tabs data={typesData} active={type} onTabChange={handleTypeChange} />
        <Input
          className={classes.input}
          value={query}
          onChange={handleQueryChange}
          type="text"
          placeholder="Search symbols..."
        />
      </div>
      <table className={classes.results}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>HTML entity</th>
            <th>CSS entity</th>
          </tr>
        </thead>
        <tbody>{results}</tbody>
      </table>
    </Background>
  );
}
