import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Switch } from "react-native";
import DropdownComponent from "./Dropdown";
import { useUpdateFormFields } from "../customer/hooks";

const Form = ({ handleSubmit, customerID }) => {

  const { fields, setFormField } = useUpdateFormFields(customerID);

  const onSubmit = () => {
    handleSubmit();
  };


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        key={"firstName"}
        placeholder="First Name..."
        onChangeText={setFormField("firstName")}
        value={fields.firstName}
      />

      <View style={styles.gap} />

      <TextInput
        style={styles.textInput}
        key={"lastName"}
        placeholder="Last Name..."
        onChangeText={setFormField("lastName")}
        value={fields.lastName}
      />

      <View style={styles.gap} />


      <View style={styles.switchView}>
        <Text style={styles.switchText}>Active: </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={fields.active ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setFormField("active")}
          value={fields.active}
        />
      </View>

      <View style={{height: 25}} />

      <DropdownComponent setFormField={setFormField} selectedRegion={fields.region} />

      <View style={styles.gap} />

      <TouchableOpacity
        onPress={onSubmit}
        style={{...styles.button, backgroundColor: "#2196F3"}}
      >
        <Text style={{
          color: "#fff",
          textAlign: "center",
          textTransform: "uppercase",
        }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    columnGap: 10,
    flex: 6,
  },
  gap: { height: 30 },
  textInput: {
    borderWidth: 1,
    borderColor: "#014949",
    borderRadius: 5,
    padding: 15,
    fontSize: 18,
  },
  switchView: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
  },
  switchText: {
      fontSize: 18,
      width: "25%",
      fontWeight: "500",
  },
  button: {
      padding: 15,
      borderRadius: 4,
      marginTop: 10,
  }
});



