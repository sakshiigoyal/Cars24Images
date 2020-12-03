/**
 * Sakshi Goyal
 * Main root file
 */

import React from 'react';
import {Provider} from 'react-redux';
import ConfigureStore from './utils/Config';
import MainScreenContainer from './src/MainScreenContainer';

const store = ConfigureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreenContainer />
      </Provider>
    );
  }
}

export default App;
