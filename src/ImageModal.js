import React from 'react';
import {Animated, Image, TouchableOpacity} from 'react-native';
import {PinchGestureHandler, State} from 'react-native-gesture-handler';

import {styles} from './Styles';
import {AppConstants} from '../utils/Constant';

const scale = new Animated.Value(1);
const onPinchEvent = Animated.event(
  [
    {
      nativeEvent: {scale: scale},
    },
  ],
  {
    useNativeDriver: true,
  },
);
const onPinchStateChange = (event) => {
  if (event.nativeEvent.oldState === State.ACTIVE) {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }
};

export const imageModal = () => {
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
        onGestureEvent={onPinchEvent}
        onHandlerStateChange={onPinchStateChange}>
        <Animated.Image
          style={[styles.imageUrlStyle, {transform: [{scale: this.scale}]}]}
          source={{uri: this.state.imageUrl}}
        />
      </PinchGestureHandler>
    </Animated.View>
  );
};
