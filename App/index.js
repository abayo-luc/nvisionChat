import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';


EStyleSheet.build({
    $defaultBlue: '#b5ffff',
    $pureBlack: '#000000',
    $pureWhite: '#ffffff',
    $defaultPurple: '#d0c3e8',
});

export default () =><Navigator/>;