import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import { regions } from "../features/data/regions";


const DropdownComponent = ({ setFormField, selectedRegion }) => {
  const onChangeHandler = (item) => {
    setFormField("region")(item.value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Region:</Text>
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.shadow}
        data={regions}
        maxHeight={300}
        value={selectedRegion}
        labelField="label"
        valueField="value"
        onChange={onChangeHandler}
        iconStyle={{ tintColor: "gray" }}
      />
    </View>
  );
};

export default DropdownComponent;



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    padding: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});