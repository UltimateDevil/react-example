import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DBContextProvider } from './store/db-context';

ReactDOM.render(
  <DBContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DBContextProvider>,
  document.getElementById('root')
);