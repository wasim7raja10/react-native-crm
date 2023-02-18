import { useState } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import { regions } from "../data/regions";


const DropdownComponent = ({ setFormField, selectedRegion }) => {
  const [value, setValue] = useState(selectedRegion);

  const onChangeHandler = (item) => {
    setValue(item.value);
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
        value={value}
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