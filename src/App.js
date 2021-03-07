import React from 'react';
import Routes from './routes';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import store from './store';
import history from './services/history';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}