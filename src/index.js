import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter } from "react-router-dom";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
