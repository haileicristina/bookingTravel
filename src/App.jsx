import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import Header from './components/Header';
import {Provider} from 'react-redux';
import store from './store';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <RoutesApp/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

