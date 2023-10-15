import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './i18n/i18n';
import App from './App';

import '@dotlottie/react-player/dist/index.css';
import 'antd/dist/antd.css';
import './styles/_app.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
