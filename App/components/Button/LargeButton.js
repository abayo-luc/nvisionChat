import React from 'react';
import Button from 'react-native-button';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './sytles'

const LargeButton = (props) => {
    const {text, onPress, backColor ='#d0c3e8', color='#212121'} = props;
    return(
        <View style={styles.buttonWraper}>
            <Button
            containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:0, backgroundColor: `${backColor}`}}
            disabledContainerStyle={{backgroundColor: '#d0c3e8'}}
            style={{fontSize: 18, color: `${color}`}}
            onPress={onPress}>
            {text}
            </Button>
        </View>
    )
}

LargeButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    backColor: PropTypes.string,
    color: PropTypes.string
}
export default LargeButton;