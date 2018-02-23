import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import firebase from 'firebase';
import Navigator from './config/routes';

EStyleSheet.build({
    $defaultBlue: '#b5ffff',
    $pureBlack: '#000000',
    $pureWhite: '#ffffff',
    $defaultPurple: '#d0c3e8',
});

// export default () =><Navigator/>;
export default class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyCzXczBVzfDXMg9OsrCggmcZHhmK0qKUPk",
            authDomain: "invisionchatapp.firebaseapp.com",
            databaseURL: "https://invisionchatapp.firebaseio.com",
            projectId: "invisionchatapp",
            storageBucket: "invisionchatapp.appspot.com",
            messagingSenderId: "899018983483"
        })
    }
    render(){
        return(
            <Navigator/>
        )
    }
}