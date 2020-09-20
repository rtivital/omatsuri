import React from 'react';
import { useDocumentTitle } from 'xooks';
import ToolCard from './ToolCard/ToolCard';
import PageBase from '../../components/PageBase/PageBase';
import settings from '../../settings';
import classes from './Index.styles.less';

export default function Index() {
  useDocumentTitle('Omatsuri');

  const tools = settings.tools.map((tool) => (
    <ToolCard className={classes.tool} key={tool.name} {...tool} />
  ));

  return (
    <PageBase className={classes.wrapper}>
      <div className={classes.tools}>{tools}</div>
    </PageBase>
  );
}
