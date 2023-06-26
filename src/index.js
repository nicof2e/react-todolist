import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/scss/bootstrap-reboot.scss'; //css reset
import '../node_modules/bootstrap/scss/bootstrap-grid.scss'; //格線系統
import './index.css';
import './Utilities.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);