import React from "react";
import { Text,View, Image, TextInput } from "react-native";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption/";
import question from "./assets/data/oneQuestionWithOption";

const App = () =>{

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>

        {question.options.map((option) =>
          <ImageOption 
          key={option.id}
          image={option.image}
          text={option.text}
          />
        )}
        
      </View>
    </View>
  );
}

export default App;