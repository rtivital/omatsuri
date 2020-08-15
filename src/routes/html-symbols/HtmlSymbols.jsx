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

      const items = group.data.map((item) => (
        <div className={classes.item} key={item.entity}>
          {item.entity}
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
