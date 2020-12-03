/**
 * Sakshi Goyal
 * Main root file
 */

import React from 'react';
import {Provider} from 'react-redux';
import ConfigureStore from './utils/Config';
import MainScreen from './src/MainScreen';

const store = ConfigureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}

export default App;
