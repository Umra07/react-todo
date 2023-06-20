import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
