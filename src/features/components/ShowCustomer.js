import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { regions } from "../data/regions";

const ShowCustomer = ({ item }) => {
  const { navigate } = useNavigation();

  const itemRegion = regions.find((region) => region.value === item.region);

  return (
    <TouchableOpacity
      // @ts-ignore
      onPress={() => navigate("Edit Customer", { customerID: item.id })}
    >
      <View key={item.id} style={styles.itemView}>
        <Text key={"id"}>ID: {item.id}</Text>
        <Text key={"fn"}>First Name: {item.firstName}</Text>
        <Text key={"ln"}>Last Name: {item.lastName}</Text>
        <Text key={"ac"}>Active: {item.active ? "True" : "False"}</Text>
        <Text key={"re"}>Region: {itemRegion?.label}</Text>
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
});

export default ShowCustomer;
