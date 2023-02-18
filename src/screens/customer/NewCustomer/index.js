import { SafeAreaView, Text, ScrollView } from "react-native";
import React from "react";
import { useNewCustomer } from "../../../features/customer/hooks";
import styles from "./styles";
import Form from "../../../features/components/Form";

const NewCustomer = () => {
  const { onSubmit } = useNewCustomer();
  return (
    <SafeAreaView>
      <ScrollView style={styles.view}>
        <Form handleSubmit={onSubmit} showDelete={false} customerID={null} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default NewCustomer;