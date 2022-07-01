import React from 'react';
import { View, Text } from 'react-native';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './styles';

const Header = ({progress}) => {
    return(
        <View style={styles.root}>
            <ProgressBar progress={progress}/>
        </View>
    )
};

export default Header;