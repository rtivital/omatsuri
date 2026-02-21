import 'normalize.css';

import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.less';

const container = document.getElementById('app');

if (!container) {
  throw new Error('Root container #app was not found');
}

createRoot(container).render(<App />);
