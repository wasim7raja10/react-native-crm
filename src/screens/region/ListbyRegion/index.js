import { View } from "react-native";
import React from "react";
import styles from "./styles";
import CustomerList from "../../../features/components/CustomerList";

const ListbyRegion = ({route}) => {
  const { regionValue } = route.params;
  return (
    <View style={styles.view}>
      <CustomerList regionValue={regionValue} />
    </View>
  );
}

export default ListbyRegion;
