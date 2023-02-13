import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./screens/Welcome";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListofRegions from "./screens/region/ListRegions";
import ListbyRegion from "./screens/region/ListbyRegion";
import NewCustomer from "./screens/customer/NewCustomer";
import EditCustomer from "./screens/customer/EditCustomer";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="List of Regions" component={ListofRegions} />
        <Stack.Screen name="List by Region" component={ListbyRegion} />
        <Stack.Screen name="New Customer" component={NewCustomer} />
        <Stack.Screen name="Edit Customer" component={EditCustomer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;