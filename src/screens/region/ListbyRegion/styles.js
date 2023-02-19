import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "#000",
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "center",
    fontSize: 20,
  },
  view: {
    width: "100%",
    height: "100%",
    padding: 10,
  },
  noCustomerView: {
    height: "100%",
    justifyContent: "center",


  },
  noCustomerText: {
    color: "gray",
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "center",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
