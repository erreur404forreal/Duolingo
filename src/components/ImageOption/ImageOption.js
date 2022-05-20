import React from "react";
import { Pressable, Text,View, Image } from "react-native";
import propTypes from "prop-types";
import styles from "./styles";

const ImageOption = ({image, text, isSelected, onPress}) => (
    <Pressable 
        onPress={onPress}
        style={[styles.optionContainer, isSelected ? styles.optionSelectedContainer : {}]}
        >
      <Image source={{ 
          uri: image
        }}
        resizeMode="contain"
        style={styles.optionImage}
      />
      <Text style={isSelected ? styles.optionSelectedText : styles.optionText}>{text}</Text>
    </Pressable>
  );

  ImageOption.propTypes = {
      image: propTypes.string.isRequired,
      text: propTypes.string.isRequired,
      isSelected: propTypes.bool.isRequired,
      onPress: propTypes.func,
  };

  ImageOption.defaultProps = {
    isSelected: false,
    onPress: () => {}
  };

export default ImageOption;