import React from 'react';
import {View, Image, Text, ImageBackground, StyleSheet} from 'react-native';
import styles from './styles';

const LoginIcon = () =>{
   return(
       <View style={styles.container}>
            <Image style={StyleSheet.absoluteFill} source={require('./images/chatback.png')}/>
            <Image style={styles.icon} source={require('./images/chat.png')}/>
       </View>
   ) 
}

export default LoginIcon;