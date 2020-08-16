import React from 'react';
import ToolCard from '../../components/ToolCard/ToolCard';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import toolsData from '../../data/tools';
import classes from './Index.styles.less';

export default function Index() {
  const tools = toolsData.map((tool) => (
    <ToolCard className={classes.tool} key={tool.name} {...tool} />
  ));

  return (
    <main className={classes.wrapper}>
      <Container>
        <Header />
        <div className={classes.tools}>{tools}</div>
        <Footer />
      </Container>
    </main>
  );
}
