import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import RoutesApp from './routes';
import Header from './components/Header';
import {Provider} from 'react-redux';
import history from './services/history';
import store from './store';


export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Router  history={history} basename="/bookingTravel">
          <Header />
          <RoutesApp/>
        </Router>
      </Provider>
    </div>
  );
}

