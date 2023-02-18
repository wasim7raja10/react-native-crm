import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import styles from "./styles";
import React from "react";
import { regions } from "../../../features/data/regions";

const ListRegions = ({navigation}) => {
  const Region = ({ item }) => (
    <View style={styles.item}>
      <Button
        onPress={() =>
          navigation.navigate(
            'List by Region',
            { regionValue: item.value }
          )
        }
        title={item.label}
        color="blue"
      />
    </View>
  )
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("New Customer")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Create New Customer</Text>
      </TouchableOpacity>
      <View style={{ height: 20 }} />
      <Text style={styles.title}>List of Regions</Text>
      <FlatList
        style={styles.list}
        data={regions}
        renderItem={Region}
        keyExtractor={(item) => item.value.toString()}
      />
    </View>
  );
};

export default ListRegions;
