import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = ({ text, onPress, disabled = false }) => {

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
