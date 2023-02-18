import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useUpdateFields } from "../customer/hooks";
import React from "react";
import { useState } from "react";
import { Switch } from "react-native";
import DropdownComponent from "./Dropdown";

const Form = ({ handleSubmit, customerID, showDelete }) => {
  const { fields, setFormField } = useUpdateFields(customerID);

  const { firstName, lastName, active, region } = fields;

  const onSubmit = () => {
    handleSubmit();
  };

  const [isEnabled, setIsEnabled] = useState(active);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        key={"firstName"}
        placeholder="First Name..."
        value={firstName}
        onChangeText={setFormField("firstName")}
      />

      <View style={styles.gap} />

      <TextInput
        style={styles.textInput}
        key={"lastName"}
        placeholder="Last Name..."
        value={lastName}
        onChangeText={setFormField("lastName")}
      />

      <View style={styles.gap} />


      <View style={styles.switchView}>
        <Text style={styles.switchText}>Active: </Text>
        <Switch
          onValueChange={(e) => {
            setIsEnabled(e);
            setFormField("active")(e);
          }}
          value={isEnabled}
        />
      </View>

      <View style={{height: 25}} />

      <DropdownComponent setFormField={setFormField} selectedRegion={region} />

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
      {showDelete && (
        <TouchableOpacity
          onPress={() => {
          }}
          style={{...styles.button, backgroundColor: "red"}}
        >
          <Text style={{
            color: "#fff",
            textAlign: "center",
            textTransform: "uppercase",
          }}>Delete</Text>
        </TouchableOpacity>
      )}
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



