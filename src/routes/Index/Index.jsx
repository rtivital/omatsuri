import React from 'react';
import ToolCard from '../../components/ToolCard/ToolCard';
import Footer from '../../components/Footer/Footer';
import GithubButton from '../../components/GithubButton/GithubButton';
import Container from '../../components/Container/Container';
import toolsData from '../../data/tools';
import logoText from '../../assets/logo-text.svg';
import classes from './Index.styles.less';

export default function Index() {
  const tools = toolsData.map(tool => (
    <ToolCard className={classes.tool} key={tool.name} {...tool} />
  ));

  return (
    <main className={classes.wrapper}>
      <Container>
        <header className={classes.header}>
          <div className={classes.headerBody}>
            <img className={classes.logo} src={logoText} alt="" />
            <p className={classes.description}>Open source browser tools for everyday use</p>
          </div>
          <GithubButton />
        </header>

        <div className={classes.tools}>{tools}</div>
        <Footer />
      </Container>
    </main>
  );
}
