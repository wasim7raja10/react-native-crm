import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import { useLoadCustomers } from "../../../features/customer/hooks";
import ShowCustomer from "../../../components/ShowCustomer";

const ListbyRegion = ({ route, navigation }) => {
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
        <View style={styles.noCustomerView}>
          <Text style={styles.noCustomerText}>{"No Customers"}</Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("New Customer")}
          >
            <Text style={styles.buttonText}>{"Create New Customer"}</Text>
          </Pressable>
        </View>)
      }
    </View>
  );
}

export default ListbyRegion;
