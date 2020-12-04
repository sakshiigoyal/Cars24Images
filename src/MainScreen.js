import React from 'react';
import {
  View,
  Switch,
  Text,
  SafeAreaView,
  Animated,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {PinchGestureHandler, State} from 'react-native-gesture-handler';

import {AppConstants} from '../utils/Constant';
import {styles} from './Styles';
import {loaderView} from '../utils/Loader';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: [],
      listGrid: true,
      showImage: false,
      imageUrl: '',
      showLoader: true,
    };
    this.animatedValue = new Animated.Value(0);
  }

  scale = new Animated.Value(1);

  onPinchEvent = Animated.event(
    [
      {
        nativeEvent: {scale: this.scale},
      },
    ],
    {
      useNativeDriver: true,
    },
  );
  onPinchStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(this.scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

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
        showLoader: false,
      });
    }
  }

  imageModal = () => {
    return (
      <Animated.View
        style={[
          {
            transform: [
              {
                translateX: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
              {
                translateY: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 10],
                }),
              },
            ],
          },
          styles.imageModalStyle,
        ]}>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              showImage: false,
            });
          }}>
          <Image
            style={styles.crossIconStyle}
            source={require('./images/cross_icon.png')}
          />
        </TouchableOpacity>
        <PinchGestureHandler
          onGestureEvent={this.onPinchEvent}
          onHandlerStateChange={this.onPinchStateChange}>
          <Animated.Image
            style={[styles.imageUrlStyle, {transform: [{scale: this.scale}]}]}
            source={{uri: this.state.imageUrl}}
          />
        </PinchGestureHandler>
      </Animated.View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {this.state.showImage && this.imageModal()}
        <Switch
          trackColor={{true: 'black'}}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({
              listGrid: itemValue,
            });
          }}
          value={this.state.listGrid}
        />

        <FlatList
          key={
            this.state.listGrid
              ? AppConstants.fourColumns
              : AppConstants.oneColumn
          }
          numColumns={this.state.listGrid ? 4 : 1}
          style={styles.listContainer}
          extraData={this.state}
          data={this.state.imageList}
          renderItem={({item, index}) => (
            <View key={item.id} style={styles.containerStyle}>
              <Text numberOfLines={1} style={styles.titleStyle}>
                {item.title}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Animated.timing(this.animatedValue, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                  }).start();
                  this.setState({
                    showImage: true,
                    imageUrl: item.url,
                  });
                }}>
                <Image
                  resizeMode="contain"
                  style={styles.imageStyle}
                  source={{
                    uri: item.url,
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.postUUID}
        />
        {this.state.showLoader && loaderView()}
      </SafeAreaView>
    );
  }
}

export default MainScreen;
