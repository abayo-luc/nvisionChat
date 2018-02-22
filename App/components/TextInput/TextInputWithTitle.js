import React from 'React';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput, Image} from 'react-native';
import styles from './styles';

const TextInputWithTitle = (props) =>{
    const {text, secureTextEntry} = props;
    return(  
        <View style={styles.contentWraper}>
            <View>
            {secureTextEntry ? <Image source={require('./images/lock.png')} style={styles.icon}/> : <Image source={require('./images/user.png')} style={styles.icon}/>}
            </View>
            <View style={styles.wraper}>
                <Text style={styles.text}>{text}</Text>
                <TextInput secureTextEntry={secureTextEntry} underlineColorAndroid='rgb(250,250,250)' style={styles.input}/>
            </View>
        </View>
    )
}
TextInputWithTitle.proptypes ={
    text: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    value: PropTypes.string
}
export default TextInputWithTitle;