import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';

import React from 'react';
import {
  View,
  ActivityIndicator,
  NetInfo,
  StyleSheet,
  Text,
  Alert,
  SafeAreaView,
  ImageBackground,
  Image,
  Platform,
  Linking,
  ScrollView,
  FlatList,
} from 'react-native';

class MainScreen extends React.Component {
  componentDidMount() {
    this.getDataUsingSimpleGetCall();
  }
  render() {
    return (
      <SafeAreaView>
        <FlatList>
          <Text>hey</Text>
        </FlatList>
      </SafeAreaView>
    );
  }
}

export default MainScreen;
