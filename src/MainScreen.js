import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  Animated,
  Image,
  Easing,
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
    this.animatedValue = new Animated.Value(0)

  }

  componentDidMount() {
    this.props.fetchImageList();
    // Animated.timing(this.animatedValue, {
    //   toValue: 1,
    //   duration: 1300,
    //   useNativeDriver: true,
    // }).start()
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true
    }).start();
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      this.props.imageListReducer &&
      previousProps.imageListReducer !== this.props.imageListReducer
    ) {
      this.setState({
        imageList: this.props.imageListReducer,
      });
      console.log('imageListReducer:', this.props.imageListReducer);
    }
  }

  render() {
    // let translateX = this.entranceAnimation.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [-500, 1] // the card will translate from the left side of the screen to its natural position
    // });

    return (
      <SafeAreaView>
        <Switch
          trackColor={{ true: 'black' }}
          style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
          onValueChange={(itemValue, itemIndex) => {
            console.log('itemValue: ', itemValue);
            this.setState({
              listGrid: itemValue,
            });
          }}
          value={this.state.listGrid}
        />

        <Animated.Image
          // style={{ transform: [{ translateX }] }}
          style={{
            transform: [
              {
                translateX: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 120]
                })
              },
              {
                translateY: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 25]
                })
              },
              {
                scaleX: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 15]
                })
              },
              {
                scaleY: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 12.5]
                })
              }
            ],
            // transform: [{ translateX }],
            width: 40, height: 40
          }}
          source={{ uri: 'https://via.placeholder.com/600/92c952' }}
        />

        {/* <FlatList
          key={this.state.listGrid ? 'FourColumns' : 'OneColumn'}
          numColumns={this.state.listGrid ? 4 : 1}
          style={styles.listContainer}
          extraData={this.state}
          data={this.state.imageList}
          renderItem={({ item, index }) => (
            <View key={item.id} style={{ flex: 1, marginTop: 8 }}>
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
        /> */}
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
