import { setNotificationHandler, scheduleNotificationAsync } from 'expo-notifications';

setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function schedulePushNotification() {
  scheduleNotificationAsync({
    content: {
      title: "Here's your daily reminder!",
      body: 'You have to contact a customer today!',
      data: { data: 'Sohel Rana' },
    },
    trigger: { seconds: 2 },
  });
}

export { schedulePushNotification };