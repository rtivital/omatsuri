import React from 'react';
import ToolCard from '../../components/ToolCard/ToolCard';
import PageBase from '../../components/PageBase/PageBase';
import toolsData from '../../data/tools';
import classes from './Index.styles.less';

export default function Index() {
  const tools = toolsData.map((tool) => (
    <ToolCard className={classes.tool} key={tool.name} {...tool} />
  ));

  return (
    <PageBase className={classes.wrapper}>
      <div className={classes.tools}>{tools}</div>
    </PageBase>
  );
}
