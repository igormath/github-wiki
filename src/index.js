import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { GlobalStyle } from './styles';
import { Reset } from './styles/generics/reset';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
