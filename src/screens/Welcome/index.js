import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { useClearCustomers } from '../../features/customer/hooks';

const Welcome = ({ navigation }) => {
  const { clearCustomers } = useClearCustomers()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Manager Plus</Text>
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: '#2196F3' }}
        onPress={() => navigation.navigate('List of Regions')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      {/* space */}
      <View style={{ height: 20 }} />
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: 'red' }}
        onPress={() => clearCustomers()}
      >
        <Text style={styles.buttonText}>Clear Data</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Welcome;