import React from 'react';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View, Text} from 'react-native';
import LoginIcon from '../Icons/LoginIcon/LoginIcon';
import styles from './styles';

const LoginTitle =()=>{
    return(
        <View style={styles.container} >
            <View style={styles.insideContainer}>
                <LoginIcon/>
                <Text style={styles.text}>Chat</Text>
            </View>
        </View>
    )
}

LoginTitle.proptypes = {
    text: PropTypes.string,
}
export default LoginTitle;