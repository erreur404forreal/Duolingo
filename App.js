import React, { useState, useEffect } from "react";
import { View , Alert, SafeAreaView } from "react-native";
import styles from "./App.styles";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
import Header from "./src/components/Header";


import questions from "./assets/data/allQuestions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";

const App = () =>{

  const [selected, setSelected] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);
  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if(currentQuestionIndex >= questions.length) {
      Alert.alert("You won ! ");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if(hasLoaded) {
      saveData();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

const onCorrect = () => {
  setCurrentQuestionIndex(currentQuestionIndex + 1);
}

const restart = () => {
  setLives(5);
  setCurrentQuestionIndex(0);
}

const onIncorrect = () => {
  if(lives <= 1) {
    Alert.alert("Game over 😭 ", "Try again", [
      {
        text: "Try again",
        onPress: restart,
      },
    ]);

  } else {
    Alert.alert("Wrong answer ! 😏 ");
    setLives(lives - 1);
  }
}

const saveData = async () => {
  await AsyncStorage.setItem('lives', lives.toString());
  await AsyncStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
}

const loadData = async () => {
  const loadedLives = await AsyncStorage.getItem("lives");
  if(loadedLives) {
    setLives(parseInt(loadedLives));
  }

  const currentQuestionIndex = await AsyncStorage.getItem("currentQuestionIndex");
  if(currentQuestionIndex) {
    setCurrentQuestionIndex(parseInt(currentQuestionIndex));
  }
  setHasLoaded(true);
}

if (!hasLoaded) {
  return (
    <ActivityIndicator />
  );
}
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.root}>
      <Header progress={currentQuestionIndex / questions.length} lives={lives} />
       {currentQuestion.type == "IMAGE_MULTIPLE_CHOICE" && <ImageMultipleChoiceQuestion 
        question={currentQuestion}
        onCorrect={onCorrect}
        onIncorrect={onIncorrect}
      />}
      {currentQuestion.type == "OPEN_ENDED" && <OpenEndedQuestion 
        question={currentQuestion}
        onCorrect={onCorrect}
        onIncorrect={onIncorrect}
      />}
    </View>
    </SafeAreaView>
  );
}

export default App;