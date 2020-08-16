import React, { useState, useMemo } from 'react';
import cx from 'classnames';
import symbols from '../../data/symbols';
import useLocaStorage from '../../hooks/use-local-storage';
import useClipboard from '../../hooks/use-clipboard';
import useDocumentTitle from '../../hooks/use-document-title';
import Background from '../../components/Background/Background';
import Input from '../../components/Input/Input';
import SettingsLabel from '../../components/SettingsLabel/SettingsLabel';
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

  const clipboard = useClipboard({ timeout: 1000 });
  const ls = useLocaStorage({ key: '@omatsuri/html-symbols/search', delay: 200 });
  const [query, setQuery] = useState(ls.retrieve() || '');

  const results = useMemo(() => searchSymbols(query), [query])
    .map((group) => {
      if (group.data.length === 0) {
        return null;
      }

      const items = group.data.map((item) => (
        <div className={classes.item} key={item.entity}>
          <button
            className={classes.symbol}
            type="button"
            onClick={() => clipboard.copy(item.symbol)}
          >
            {item.symbol}
          </button>

          <button
            className={classes.control}
            type="button"
            onClick={() => clipboard.copy(item.entity)}
          >
            <div className={classes.controlInner}>
              <div className={classes.controlLabel}>HTML:</div>
              <div className={classes.controlValue}>{item.entity}</div>
            </div>
          </button>

          <button
            className={classes.control}
            type="button"
            onClick={() => clipboard.copy(item.css)}
          >
            <div className={classes.controlInner}>
              <div className={classes.controlLabel}>CSS:</div>
              <div className={classes.controlValue}>{item.css}</div>
            </div>
          </button>
        </div>
      ));

      return (
        <div className={classes.group} key={group.title}>
          <SettingsLabel className={classes.title}>{group.title}</SettingsLabel>
          <div className={classes.items}>{items}</div>
        </div>
      );
    })
    .filter(Boolean);

  return (
    <Background className={classes.wrapper}>
      <div className={classes.inputWrapper}>
        <Input
          className={classes.input}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          placeholder="Search symbols..."
        />
      </div>
      <div className={cx(classes.resuts, { [classes.copied]: clipboard.copied })}>{results}</div>
    </Background>
  );
}
