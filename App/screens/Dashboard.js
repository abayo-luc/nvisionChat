import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import HomeIcon from '../components/Icons/HomeIcon/HomeIcon';
import LargeButton from '../components/Button/LargeButton';
import firebase from 'firebase';

class Dashboard extends Component {
    static propTypes ={
        navigation: PropTypes.object,
    }
    handleLogout = () => {
        firebase.auth().signOut().then(() => this.props.navigation.navigate('Home'))
    }
    handleClosedHome = () => {
        console.log('close home screen')
    }
    handleDiskAction = () => {
        console.log('large disk pressed')
    }
    render() {
        return(
            <View style={styles.container}>
                 <View style={styles.header}>
                     <TouchableOpacity  onPress={this.handleClosedHome}>
                         <Image source={require('../components/Icons/images/close.png')} style={styles.icon}/>
                     </TouchableOpacity >
                     <TouchableOpacity onPress={this.handleDiskAction}>
                         <Image source={require('../components/Icons/images/disk.png')} style={styles.icon}/>
                     </TouchableOpacity>
                 </View>
                 <View style={styles.wraper}>
                     <HomeIcon/>
                     <LargeButton text='Logout' onPress={() => this.handleLogout()} backColor='#000000' color='#b5ffff'/>
                 </View>
            </View>
         )
    }
}


const styles = EStyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    container: {
      flex: 1,
      backgroundColor: '$defaultBlue',
      flexDirection: 'column',
      paddingTop: StatusBar.currentHeight,
    },
    wraper: {
        padding: 10,
    }, 
    icon: {
        tintColor: '$pureBlack',
        height: 30,
        width: 30,
    },
});

export default Dashboard;