import React from 'react';
import Navigation from './src/Navigation';
import * as Notifications from 'expo-notifications';

import { Provider } from 'react-redux';
import initializeStore from './src/store';

const store = initializeStore();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Here's your daily reminder!",
      body: 'You have to contact a customer today!',
      data: { data: 'Sohel Rana' },
    },
    trigger: { hour: 12, repeats: false },
  });
}

export default function App() {
  schedulePushNotification();
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
