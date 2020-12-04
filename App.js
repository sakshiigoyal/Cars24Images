/**
 * Sakshi Goyal
 * Main root file
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import ConfigureStore from './utils/Config';
import MainScreenContainer from './src/MainScreenContainer';
import AppNavigator from './utils/AppNavigator';

const store = ConfigureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
