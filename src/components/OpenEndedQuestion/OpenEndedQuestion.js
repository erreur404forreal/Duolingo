import React, { useState } from "react";
import { Text, View, TextInput, Image} from "react-native";
import PropTypes from "prop-types";
import mascot from '../../../assets/images/mascot.png';


import styles from "./styles";

const OpenEndedQuestion = () => {

    return (
        <>
        <Text style={styles.title}>Translate this sentence</Text>
        <View style={styles.row}>
            {/* Image */}
            <Image source={mascot} style={styles.mascot}/>
            <View style={styles.sentenceContainer}>
                <Text style={styles.sentence}>Sentence</Text>
            </View>
            {/* Sentence to translate */}
        </View>
        </>
    );
};


export default OpenEndedQuestion;