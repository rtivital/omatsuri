import 'normalize.css';
import 'react-colorful/dist/index.css';

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './styles.less';

// if (process.env.NODE_ENV === 'production') {
// eslint-disable-next-line global-require
require('offline-plugin/runtime').install();
// }

render(<App />, document.getElementById('app'));
