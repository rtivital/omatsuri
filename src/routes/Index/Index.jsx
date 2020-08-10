import React from 'react';
import ToolCard from '../../components/ToolCard/ToolCard';
import Footer from '../../components/Footer/Footer';
import GithubButton from '../../components/GithubButton/GithubButton';
import toolsData from '../../tools-data';
import classes from './Index.styles.less';

export default function Index() {
  const tools = toolsData.map(tool => (
    <ToolCard className={classes.tool} key={tool.name} {...tool} />
  ));

  return (
    <main className={classes.wrapper}>
      <header className={classes.header}>
        <div className={classes.headerBody}>
          <h1 className={classes.title}>Fontend Toolbox</h1>
          <p className={classes.description}>Frontend oriented browser tools for everyday use</p>
        </div>
        <GithubButton />
      </header>

      <div className={classes.tools}>{tools}</div>
      <Footer />
    </main>
  );
}
