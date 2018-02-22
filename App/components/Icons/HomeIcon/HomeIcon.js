import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const HomeIcon = ({text="Hello"}) => {
    handleHomeAction = (screen) => {
        console.log(screen + 'pressed')
    }
    return(
        <View style={styles.container}>
            <View style={styles.wraper}>
                <View style={styles.singleRow}>
                    <TouchableOpacity onPress={() => this.handleHomeAction("Home")}>
                        <Image source={require('../images/home.png')} style={styles.icon}/>
                        <Text style={styles.text}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.handleHomeAction("Profile")}>
                        <Image source={require('../images/user.png')} style={styles.icon}/>
                        <Text style={styles.text}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.wraper}>
                <View style={styles.singleRow}>
                    <TouchableOpacity onPress={() => this.handleHomeAction("Compose")}>
                        <Image source={require('../images/compose.png')} style={styles.icon}/>
                        <Text style={styles.text}>Compose</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.handleHomeAction("Gallery")}>
                        <Image source={require('../images/gallery.png')} style={styles.icon}/>
                        <Text style={styles.text}>Gallery</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.wraper}>
                <View style={styles.singleRow}>
                    <TouchableOpacity onPress={() => this.handleHomeAction("Capture")}>
                        <Image source={require('../images/capture.png')} style={styles.icon}/>
                        <Text style={styles.text}>Capture</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.handleHomeAction("Stats")}>
                        <Image source={require('../images/status.png')} style={styles.icon}/>
                        <Text style={styles.text}>Stats</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

HomeIcon.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
}

const styles = EStyleSheet.create({
    container: {
        marginBottom: 45,
    },
    wraper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        padding: 30,
    },
    icon: {
        tintColor: '$pureBlack',
        height: 30,
        width: 30,
        left: 10,
    }, 
    text: {
        fontSize: 20,
    },
    singleRow: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'center',
    }
})

export default HomeIcon;