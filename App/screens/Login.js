import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Container from '../components/Container/Container';
import LoginTitle from '../components/Text/LoginTitle';
import TextInputWithTitle from '../components/TextInput/TextInputWithTitle';
import LargeButton from '../components/Button/LargeButton';
import firebase from 'firebase';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            password: '',
            phone: '',
        };
    }
    static propTypes ={
        navigation: PropTypes.object,
    }
    handleGetStarted = () =>{
        const {email, password} = this.state;
        try{
            firebase.auth().signInWithEmailAndPassword(email, password).then((user) => this.nextToDashboard(user.email))
        }
        catch(error){
            alert(error.toString())
            firebase.auth().signOut()
        }
    };
    handleCreateAccount = () => {
        console.log('Create account')
        this.props.navigation.navigate('SignUp')
    };
    nextToDashboard = (userEmail) => {
        this.props.navigation.navigate('Dashboard', {title: userEmail})
    }
    handleResetPassword = () => {
        console.log('reset password pressed')
    };
    render() {
        return(
            <Container>
                    <KeyboardAvoidingView behavior="position">
                        <LoginTitle/>
                        <View style={styles.container}>
                            <TextInputWithTitle text="EMAIL" iconName="user" onChangeText={(input)=>this.setState({email: input})}/>
                            <TextInputWithTitle text="PASSWORD" iconName="lock" secureTextEntry={true} onChangeText={(input) => this.setState({password: input})} />
                            <View style={styles.buttonWraper}>
                                <LargeButton text="Login" onPress={() => this.handleGetStarted()}/>
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