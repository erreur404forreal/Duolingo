import React, { useState } from "react";
import { Text, View, TextInput, Image, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard} from "react-native";
import Button from "../Button";
import PropTypes from "prop-types";
import mascot from '../../../assets/images/mascot.png';


import styles from "./styles";

const OpenEndedQuestion = ({ question, onCorrect, onIncorrect}) => {
    const [input, setInput] = useState('');
    const onButtonPress = () => {
        if (question.answer.toLowerCase().trim() == input.toLowerCase().trim()) {
            onCorrect();
            setInput("");
        } else {
            onIncorrect();
        }
    };
       
    return (
        <>
            < TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={styles.fullContainer}>
            < KeyboardAvoidingView behavior="padding" style={styles.fullContainer}>
            <Text style={styles.title}>Translate this sentence</Text>
            <View style={styles.row}>
                {/* Image */}
                <Image source={mascot} style={styles.mascot} resizeMode="contain"/>
                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>{question.text}</Text>

                    {/* 19:04 */}
                    
                </View>

            </View>
            {/* Sentence to translate */}  
            <TextInput 
                value={input}
                onChangeText={setInput}
                placeholder="Type in English" 
                style={styles.textInput}
                textAlignVertical="top"
                multiline={true} 
                
            />
            <Button text="Check" onPress={onButtonPress} disabled={!input}/>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </>
    );
};


export default OpenEndedQuestion;