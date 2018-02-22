import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Container from '../components/Container/Container';
import LoginTitle from '../components/Text/LoginTitle';
import TextInputWithTitle from '../components/TextInput/TextInputWithTitle';
import LargeButton from '../components/Button/LargeButton';

class Login extends Component {
    static propTypes ={
        navigation: PropTypes.object,
    }
    handleGetStarted = () =>{
        console.log('get started press')
        this.props.navigation.navigate('Dashboard')
    };
    handleCreateAccount = () => {
        console.log('Create account')
        this.props.navigation.navigate('SignUp')
    };
    handleResetPassword = () => {
        console.log('reset password pressed')
    };
    render() {
        return(
            <Container>
                <View>
                    <KeyboardAvoidingView behavior="padding">
                        <LoginTitle/>
                        <View style={styles.container}>
                            <TextInputWithTitle text="USERNAME" iconName="user" />
                            <TextInputWithTitle text="PASSWORD" iconName="lock" secureTextEntry={true} />
                            <View style={styles.buttonWraper}>
                                <LargeButton text="Get Started" onPress={() => this.handleGetStarted()}/>
                            </View>
                            <View style={styles.textLink}>
                                <TouchableOpacity onPress={() => this.handleCreateAccount()}>
                                    <Text style={styles.externalScreenText}>Create Account</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.handleResetPassword()}>
                                    <Text style={styles.externalScreenText}>Forget Password</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Container>
        )
    }
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
        fontSize: 12,
    }, 
    textLink: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default Login;