import React from "react";
import { Text,View, Image } from "react-native";
import styles from "./styles";

const ImageOption = ({image, text}) => (
    <View style={styles.optionContainer}>
      <Image source={{ 
          uri: image
        }}
        resizeMode="contain"
        style={styles.optionImage}
      />
      <Text Text style={styles.optionText}>{text}</Text>
    </View>
  );
export default ImageOption;