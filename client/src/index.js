import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/modals/AuthContext';
import { AuthModalProvider } from './context/modals/AuthModalContext';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

// Disable React Dev Tools on Production
if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <AuthModalProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthModalProvider>
  </AuthProvider>
);