import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '../../../components/Tabs/Tabs';
import Background from '../../../components/Background/Background';
import Highlight from '../../../components/Hightlight/Highlight';
import directions from '../directions';
import generateExample from './generate-example';
import classes from './Code.styles.less';

const languages = ['.css', '.scss', '.jss'].map(language => ({ value: language, label: language }));

export default function Code({ values }) {
  const [language, setLanguage] = useState('.css');
  const [lang, examples] = generateExample(language, values);

  return (
    <Background className={classes.wrapper}>
      <Tabs data={languages} active={language} onTabChange={setLanguage} />
      <div className={classes.code}>
        <div className={classes.section}>
          <div className={classes.title}>Element</div>
          <Highlight language={lang}>{examples[0]}</Highlight>
        </div>

        <div className={classes.section}>
          <div className={classes.title}>Pseudo-element</div>
          <Highlight language={lang}>{examples[1]}</Highlight>
        </div>
      </div>
    </Background>
  );
}

Code.propTypes = {
  values: PropTypes.shape({
    direction: PropTypes.oneOf(directions).isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
