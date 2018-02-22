import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    text: {
        fontSize: 80,
        color: '$pureBlack',
        includeFontPadding: false,
    },
    container: {
        backgroundColor: '$defaultBlue',
    },
    insideContainer: {
        marginVertical: 50,
        marginHorizontal: 70,
        // alignItems: 'center',
    },
});

export default styles;