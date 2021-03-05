import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import store from './store';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}