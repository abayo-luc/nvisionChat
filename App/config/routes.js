import {StackNavigator} from 'react-navigation';
import {StatusBar} from 'react-native';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';

const HomeStack = StackNavigator({
    Home: {
        screen: Login,
        navigationOptions: {
            header: ()=>null,
        }
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions: ({navigation})=>({
            title: navigation.state.params.title,
        }),
    }
})

export default StackNavigator({
    Home: {
        screen: HomeStack
    },
    SignUp: {
        screen: SignUp,
    }
}, 
{
    mode: 'modal',
    headerMode: 'none',
}
)