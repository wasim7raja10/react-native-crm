import React from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Customer Manager Plus</Text>
      <Button
        title="Continue"
      />
      <View style={styles.space} />
      <Button
        title="Clear Storage"
      />
    </View>
  );
};


export default Welcome;