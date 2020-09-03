import React, { useState } from 'react';
import cx from 'classnames';
import { useDocumentTitle, useLocalStorage, useClipboard } from 'xooks';
import symbols from '../../data/symbols';
import Background from '../../components/Background/Background';
import Tabs from '../../components/Tabs/Tabs';
import Input from '../../components/Input/Input';
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

  const clipboard = useClipboard({ timeout: 1000 });
  const lsQuery = useLocalStorage({ key: '@omatsuri/html-symbols/search', delay: 200 });
  const lsType = useLocalStorage({ key: '@omatsuri/html-symbols/type', delay: 200 });
  const [query, setQuery] = useState(lsQuery.retrieve() || '');
  const [type, setType] = useState(lsType.retrieve() || 'Most used');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    lsQuery.save(event.target.value);
  };

  const handleTypeChange = (value) => {
    setType(value);
    lsType.save(value);
  };

  const results = searchSymbols(query, type).map((item) => (
    <tr className={classes.item} key={item.entity}>
      <td className={classes.name}>{item.name}</td>
      <td>
        <button
          className={cx(classes.control, classes.symbol)}
          type="button"
          onClick={() => clipboard.copy(item.symbol)}
        >
          {item.symbol}
        </button>
      </td>

      <td>
        <button
          className={classes.control}
          type="button"
          onClick={() => clipboard.copy(item.entity)}
        >
          {item.entity}
        </button>
      </td>

      <td>
        <button className={classes.control} type="button" onClick={() => clipboard.copy(item.css)}>
          {item.css}
        </button>
      </td>
    </tr>
  ));

  return (
    <Background className={classes.wrapper}>
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
      <table className={cx(classes.results, { [classes.copied]: clipboard.copied })}>
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
