import { View, Text, Button, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import { useLoadCustomers } from "../../../features/customer/hooks";
import ShowCustomer from "../../../features/components/ShowCustomer";

const ListbyRegion = ({ route }) => {
  const { regionValue, regionLabel } = route.params;

  const customers = useLoadCustomers();

  const filteredCustomers = customers?.filter((customer) => {
    return customer.region === regionValue;
  });

  const customerWithoutRegion = customers?.filter((customer) => {
    return customer.region === null;
  });

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{regionLabel} Region</Text>
      {filteredCustomers && filteredCustomers.length > 0 ? (
        <FlatList
          data={filteredCustomers || customerWithoutRegion}
          renderItem={(props) => <ShowCustomer {...props} />}
          keyExtractor={(item) => item.id}
        />) : (
        <>
          <Text>{"No Customers"}</Text>
          <Button
            title="Add Customer"
            // @ts-ignore
            onPress={() => navigate("New Customer")}
          />
        </>)
      }
    </View>
  );
}

export default ListbyRegion;
