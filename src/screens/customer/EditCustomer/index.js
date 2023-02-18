import React from "react";
import {  useEditCustomer } from "../../../features/customer/hooks";
import Form from "../../../features/components/Form";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const EditCustomer = ({route}) => {
  const { customerID } = route.params;
  const { onSubmit } = useEditCustomer(customerID);
  return (
    <SafeAreaView>
      <ScrollView style={styles.view}>
        <Form handleSubmit={onSubmit} customerID={customerID} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default EditCustomer;