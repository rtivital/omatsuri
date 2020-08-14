import React from 'react';
import PropTypes from 'prop-types';
import Background from '../../../components/Background/Background';
import Highlight from '../../../components/Highlight/Highlight';
import classes from './Output.styles.less';

export default function Output({ data }) {
  if (data.loading) {
    return (
      <Background className={classes.wrapper}>Processing with svgo → svg2jsx → prettier</Background>
    );
  }

  if (data.content) {
    return (
      <Background className={classes.wrapper}>
        <Highlight>{data.content}</Highlight>
      </Background>
    );
  }

  return null;
}

Output.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
    loading: PropTypes.bool.isRequired,
  }),
};
