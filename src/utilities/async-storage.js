import AsyncStorage from "@react-native-async-storage/async-storage";

export const set = async (key, value) => {
  const serialized = JSON.stringify(value);
  return await AsyncStorage.setItem(key, serialized);
};

export const get = async (key) => {
  const raw = await AsyncStorage.getItem(key);
  // @ts-ignore
  return JSON.parse(raw);
};

export const remove = async (key) => await AsyncStorage.removeItem(key);

export const clear = async () => await AsyncStorage.clear();