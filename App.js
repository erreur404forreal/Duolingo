import React, { useState, useEffect } from "react";
import { Text,View, Image, TextInput, Alert } from "react-native";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption/";
import Button from "./src/components/Button";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";

// import questions from "./assets/data/imageMulatipleChoiceQuestions";
import questions from "./assets/data/openEndedQuestions";

const App = () =>{

  const [selected, setSelected] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);

  useEffect(() => {
    if(currentQuestionIndex >= questions.length) {
      Alert.alert("You won ! ");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

const onCorrect = () => {
  setCurrentQuestionIndex(currentQuestionIndex + 1);
}

const onIncorrect = () => {
  Alert.alert("Wrong answer ! 😏 ");
}

  return (
    <View style={styles.root}>
       {/* <ImageMultipleChoiceQuestion 
        question={currentQuestion}
        onCorrect={onCorrect}
        onIncorrect={onIncorrect}
      /> */}
      <OpenEndedQuestion 
        question={currentQuestion}
        onCorrect={onCorrect}
        onIncorrect={onIncorrect}
      />
    </View>
  );
}

export default App;