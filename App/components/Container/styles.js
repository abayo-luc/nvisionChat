import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {StatusBar} from 'react-native';
import {Dimensions} from 'react-native';

const styles = EStyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '$pureBlack',
      flexDirection: 'column',
      paddingTop: StatusBar.currentHeight,
    },
  });
export default styles;