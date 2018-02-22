import React from 'react';
import PropTypes from 'prop-types';
import {View, StatusBar} from 'react-native';
import styles from './styles';

const Container =({children}) => {
    return(
        <View style={styles.container}>
            <StatusBar translucent={false} barStyle="light-content"/>
            {children}
        </View>
    )
}

Container.propTypes ={
    children: PropTypes.element,
}

export default Container;