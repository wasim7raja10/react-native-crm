import React from "react";
import { Text, FlatList, Button } from "react-native";
import { useListCustomers } from "../customer/hooks";
import ShowCustomer from "./ShowCustomer";
import { useNavigation } from "@react-navigation/native";

const CustomerList = ({regionValue}) => {
  const { navigate } = useNavigation()
  const customers = useListCustomers();

  console.log("CustomerList: customers", customers);

  const filteredCustomers = customers?.filter((customer) => {
    return customer.region === regionValue;
  });

  const customerWithoutRegion = customers?.filter((customer) => {
    return customer.region === null;
  });

  if (customerWithoutRegion && customerWithoutRegion.length > 0 || filteredCustomers && filteredCustomers.length > 0) {
    return (
      <FlatList
        data={filteredCustomers || customerWithoutRegion }
        renderItem={(props) => <ShowCustomer {...props} />}
        keyExtractor={(item) => item.id}
      />
    )
  } else {
    return <>
      <Text>{"No Customers"}</Text>
      <Button
        title="Add Customer"
        // @ts-ignore
        onPress={() => navigate("New Customer") }
      />
    </>
  }
};

export default CustomerList;
