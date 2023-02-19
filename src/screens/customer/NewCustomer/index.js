import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useCreateCustomer } from "../../../features/customer/hooks";
import styles from "./styles";
import Form from "../../../components/Form";

const NewCustomer = () => {
  const { onSubmit } = useCreateCustomer();
  return (
    <SafeAreaView>
      <ScrollView style={styles.view}>
        <Form handleSubmit={onSubmit} customerID={null} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default NewCustomer;