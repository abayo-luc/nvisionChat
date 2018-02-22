import React from 'react';
import {View, Text,  Button, TouchableHighlight} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Container from '../components/Container/Container';
import LoginTitle from '../components/Text/LoginTitle';
import TextInputWithTitle from '../components/TextInput/TextInputWithTitle';

const Login = ()=>{
    handleGetStarted = () =>{
        console.log('get started press')
    };
    handleCreateAccount = () => {
        console.log('Create account')
    };
    return(
        <Container>
            <View>
                <LoginTitle/>
                <View style={styles.container}>
                    <TextInputWithTitle text="USERNAME" />
                    <TextInputWithTitle text="PASSWORD" secureTextEntry={true} />
                    <View style={styles.buttonWraper}>
                        <Button title="Get Started" onPress={this.handleGetStarted} color="#d0c3e8" style={styles.button}/>
                    </View>
                    <TouchableHighlight onPress={this.handleCreateAccount}>
                        <Text style={styles.externalScreenText}>Create Account</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Container>
    )
}
const styles = EStyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginVertical: 50,
        // alignItems: 'center',
        // flexDirection: 'row',
    },
    buttonWraper: {
        marginVertical: 30,
    },
    button: {
        height: 48,
        color: '$pureBlack'
    },
    externalScreenText: {
        color: '$pureWhite',
    }
})
export default Login;