import React from 'react';
import ToolCard from '../../components/ToolCard/ToolCard';
import toolsData from './tools-data';
import classes from './Index.styles.less';

export default function Index() {
  const tools = toolsData.map(tool => (
    <ToolCard className={classes.tool} key={tool.name} {...tool} />
  ));

  return (
    <main className={classes.wrapper}>
      <header className={classes.header}>
        <h1 className={classes.title}>Fontend Toolbox</h1>
        <p className={classes.description}>Simple online tools for everyday use</p>
      </header>

      <div className={classes.tools}>{tools}</div>
    </main>
  );
}
