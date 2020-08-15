import React, { useState, useMemo } from 'react';
import symbols from '../../data/symbols';
import useLocaStorage from '../../hooks/use-local-storage';
import useDocumentTitle from '../../hooks/use-document-title';
import Background from '../../components/Background/Background';
import Input from '../../components/Input/Input';
import classes from './HtmlSymbols.styles.less';

function searchSymbols(query) {
  if (query.trim().length === 0) {
    return symbols.map((group) => ({ title: group.title, data: group.data }));
  }

  return symbols.map((group) => ({
    title: group.title,
    data: group.fuse.search(query).map(({ item }) => item),
  }));
}

export default function HtmlSymbols() {
  useDocumentTitle('Symbols collection');

  const ls = useLocaStorage({ key: '@omatsuri/html-symbols/search', delay: 200 });
  const [query, setQuery] = useState(ls.retrieve() || '');

  const results = useMemo(() => searchSymbols(query), [query])
    .map((group) => {
      if (group.data.length === 0) {
        return null;
      }

      // symbol: '⇚',
      // entity: '&lAarr;',
      // name: 'Left Triple Arrow',
      // css: '\\21DA',

      const items = group.data.map((item) => (
        <div className={classes.item} key={item.entity}>
          <button className={classes.symbol} type="button">
            {item.symbol}
          </button>

          <button className={classes.control} type="button">
            <div className={classes.controlInner}>
              <div className={classes.controlLabel}>HTML:</div>
              <div className={classes.controlValue}>{item.entity}</div>
            </div>
          </button>

          <button className={classes.control} type="button">
            <div className={classes.controlInner}>
              <div className={classes.controlLabel}>CSS:</div>
              <div className={classes.controlValue}>{item.css}</div>
            </div>
          </button>
        </div>
      ));

      return (
        <div className={classes.group} key={group.title}>
          <h2 className={classes.title}>{group.title}</h2>
          <div className={classes.items}>{items}</div>
        </div>
      );
    })
    .filter(Boolean);

  return (
    <Background className={classes.wrapper}>
      <Input
        className={classes.input}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        type="text"
        placeholder="Search symbols..."
      />
      <div className={classes.resuts}>{results}</div>
    </Background>
  );
}
