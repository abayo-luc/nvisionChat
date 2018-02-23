import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Container from '../components/Container/Container';
import EStyleSheet from 'react-native-extended-stylesheet';
import TextInputWithTitle from '../components/TextInput/TextInputWithTitle';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import LargeButton from '../components/Button/LargeButton';
import firebase from 'firebase';


class SingUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            phone: '',
        };
    }


    handleNext = () => {
        const {email, password, phone} = this.state;
        try{
            if(email.length < 6 ) {
                alert('please enter longer password')
                return;
            }
            const enteredEmail = email.toLocaleLowerCase().toString();
            const EnteredPassword = password.toString();
            firebase.auth().createUserWithEmailAndPassword(enteredEmail, EnteredPassword)
        }

        catch (error) {
            alert(error.toString())
        }
    }
    render(){
        return(
            <Container>
                <KeyboardAvoidingView behavior="position" >
                    <View style={styles.header}>
                        <Text style={styles.text}>1 of 3</Text>
                    </View>
                    <ScrollView style={styles.warper}>
                        <TextInputWithTitle keyboardType='email-address' text="EMAIL" iconName="email" onChangeText={(input) => this.setState({email: input})} value={this.state.email}/>
                        <TextInputWithTitle text="PASSWORD" iconName="lock" secureTextEntry={true} onChangeText={(input) => this.setState({password: input})} value={this.state.password}/>
                        <TextInputWithTitle keyboardType='phone-pad' text="PHONE" iconName="phone" onChangeText={(input) => this.setState({phone: input})} value={this.state.phone} />
                        <View style={styles.button} >
                            <LargeButton text="Next" onPress={() => this.handleNext()} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Container>
        )
    }
}

const styles = EStyleSheet.create({
    warper: {
        paddingHorizontal: 20,
        paddingTop: 55,
        
    },
    header: {
        backgroundColor: '$defaultBlue',
        height: 80,
    },
    text: {
        fontSize: 30,
        fontWeight: "700",
        paddingVertical: 15,
        paddingHorizontal: 50,
    },
    button: {
        paddingTop: 25,
    }
})
export default SingUp;