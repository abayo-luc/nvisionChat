import React, {Component} from 'react';
import Container from '../components/Container/Container';
import EStyleSheet from 'react-native-extended-stylesheet';
import TextInputWithTitle from '../components/TextInput/TextInputWithTitle';
import {View, Text} from 'react-native';
import LargeButton from '../components/Button/LargeButton';

class SingUp extends Component {
    handleNext = () => {
        console.log('pressed next')
    }
    render(){
        return(
            <Container>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.text}>1 of 3</Text>
                    </View>
                    <View style={styles.wraper}>
                        <TextInputWithTitle text="NAME" iconName="twobars"/>
                        <TextInputWithTitle text="EMAIL" iconName="email"/>
                        <TextInputWithTitle text="PASSWORD" iconName="lock" secureTextEntry={true}/>
                        <TextInputWithTitle text="PHONE" iconName="phone" />
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