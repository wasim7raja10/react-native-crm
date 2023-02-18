import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 20,
  },
  button: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  title: {
    textAlign: 'center',
    marginVertical: 30,
    fontWeight: 'bold',
    fontSize: 30,
  },
  list: {
    flex: 1,
    margin: 2,
    gap: 2,
  },
  item: {
    paddingBottom: 10,
  }
});

export default styles;