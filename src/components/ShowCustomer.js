import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { regions } from "../features/data/regions";

const ShowCustomer = ({ item }) => {
  const { navigate } = useNavigation();

  const itemRegion = regions.find((region) => region.value === item.region);

  return (
    <TouchableOpacity
      // @ts-ignore
      onPress={() => navigate("Edit Customer", { customerID: item.id })}
    >
      <View key={item.id} style={styles.itemView}>
        <Text style={styles.title}># {item.id}</Text>
        <View style={{height: 10}} />
        <View style={styles.fieldView}>
          <Text style={styles.title}>Name:</Text>
          <Text>{item.firstName} {item.lastName}</Text>
        </View>
        <View style={{height: 10}} />
        <View style={styles.fieldView}>
          <Text style={styles.title}>Is active?</Text>
          <Text>{item.active ? "Yes" : "No"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemView: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "blue",
  },
  fieldView: {
    flexDirection: "row",
  },
  title: {
    width: '30%',
    fontWeight: 'bold',
  },
});

export default ShowCustomer;
