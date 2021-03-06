import React from 'react';
import { View, Text, Image } from 'react-native';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './styles';

import heart from '../../../assets/images/heart.png';

const Header = ({progress, lives}) => {
    return(
        <View style={styles.root}>
            <ProgressBar progress={progress}/>

            <Image source={heart} style={styles.icon} resizeMode="contain"/>
            <Text style={styles.lives}>{lives}</Text>
        </View>
    )
};

export default Header;