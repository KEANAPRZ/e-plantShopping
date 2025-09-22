import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store.js';

// Rendering the app with StrictMode and Provider for Redux integration
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Providing Redux store to the app */}
      <App />
    </Provider>
  </React.StrictMode>,
);
