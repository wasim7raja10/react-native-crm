import React from 'react';
import Navigation from './src/Navigation';

import { Provider } from 'react-redux';
import initializeStore from './src/store';

const store = initializeStore();

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
