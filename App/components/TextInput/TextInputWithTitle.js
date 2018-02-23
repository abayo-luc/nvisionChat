import React from 'React';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput, Image} from 'react-native';
import styles from './styles';

const TextInputWithTitle = (props) =>{
    const {text, secureTextEntry, iconName, onChangeText} = props;
    return(  
        <View style={styles.contentWraper}>
            <View>
            {iconName ==="lock" ? <Image source={require(`./images/lock.png`)} style={styles.icon}/> : 
            iconName === "email" ? <Image source={require(`./images/email.png`)} style={styles.icon}/> :
            iconName === "phone" ? <Image source={require(`./images/phone.png`)} style={styles.icon}/> :
            iconName === "user" ? <Image source={require(`./images/user.png`)} style={styles.icon}/> :
             <Image source={require(`./images/twobars.png`)} style={styles.icon}/> }
            </View>
            <View style={styles.wraper}>
                <Text style={styles.text}>{text}</Text>
                <TextInput secureTextEntry={secureTextEntry} underlineColorAndroid='#9e9e9e' style={styles.input} onChangeText={onChangeText} />
            </View>
        </View>
    )
}
TextInputWithTitle.proptypes ={
    text: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    value: PropTypes.string,
    iconName: PropTypes.string,
    onChangeText: PropTypes.func,
}
export default TextInputWithTitle;