import React from 'react';
import {ActivityIndicator} from 'react-native';
import {styles} from './Styles';
import {AppConstants} from '../utils/Constant';

export const loaderView = () => {
  return (
    <ActivityIndicator
      style={styles.loaderStyle}
      size={AppConstants.large}
      color={AppConstants.black}
    />
  );
};
