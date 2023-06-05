import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './App/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </Provider>
);