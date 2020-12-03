import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';

import React from 'react';
import {
  View,
  ActivityIndicator,
  Switch,
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
  constructor(props) {
    super(props);
    this.state = {
      imageList: [],
      listGrid: true,
    };
  }
  componentDidMount() {
    this.props.fetchImageList();
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      this.props.imageListReducer &&
      previousProps.imageListReducer !== this.props.imageListReducer
    ) {
      this.setState({
        imageList: this.props.imageListReducer,
      });
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Switch
          trackColor={{true: 'black'}}
          style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
          onValueChange={(itemValue, itemIndex) => {
            console.log('itemValue: ', itemValue);
            this.setState({
              listGrid: itemValue,
            });
          }}
          value={this.state.listGrid}
        />

        <FlatList
          key={this.state.listGrid ? 'FourColumns' : 'OneColumn'}
          numColumns={this.state.listGrid ? 4 : 1}
          style={styles.listContainer}
          extraData={this.state}
          data={this.state.imageList}
          renderItem={({item, index}) => (
            <View key={item.id} style={{flex: 1, marginTop: 8}}>
              <Text numberOfLines={1} style={styles.titleStyle}>
                {item.title}
              </Text>
              <Image
                resizeMode="contain"
                style={styles.imageStyle}
                source={{
                  url: item.url,
                }}
              />
            </View>
          )}
          keyExtractor={(item) => item.postUUID}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    flex: 0.5,
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
  listContainer: {
    flexGrow: 1,
    paddingBottom: 12,
    margin: 8,
  },
  imageStyle: {
    flex: 0.5,
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: 4,
  },
});

export default MainScreen;
