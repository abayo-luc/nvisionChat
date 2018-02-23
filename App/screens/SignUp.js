import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Container from '../components/Container/Container';
import EStyleSheet from 'react-native-extended-stylesheet';
import TextInputWithTitle from '../components/TextInput/TextInputWithTitle';
import {View, Text} from 'react-native';
import LargeButton from '../components/Button/LargeButton';
import firebase from 'firebase';


class SingUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            phone: '',
        };
    }


    handleNext = () => {
        const {email, name, password, phone} = this.state;
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
                <View>
                    <View style={styles.header}>
                        <Text style={styles.text}>1 of 3</Text>
                    </View>
                    <View style={styles.wraper}>
                        <TextInputWithTitle text="NAME" iconName="twobars" onChangeText={(input) => this.setState({name: input})} value={this.state.name}/>
                        <TextInputWithTitle text="EMAIL" iconName="email" onChangeText={(input) => this.setState({email: input})} value={this.state.email}/>
                        <TextInputWithTitle text="PASSWORD" iconName="lock" secureTextEntry={true} onChangeText={(input) => this.setState({password: input})} value={this.state.password}/>
                        <TextInputWithTitle text="PHONE" iconName="phone" onChangeText={(input) => this.setState({phone: input})} value={this.state.phone} />
                        <View style={styles.button} >
                            <LargeButton text="Next" onPress={() => this.handleNext()} />
                        </View>
                    </View>
                </View>
            </Container>
        )
    }
}

const styles = EStyleSheet.create({
    wraper: {
        paddingHorizontal: 20,
        marginTop: 55,
        flex: 0,
        
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