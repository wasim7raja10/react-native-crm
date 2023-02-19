import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// @ts-ignore
async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Here's your daily reminder!",
      body: 'You have to contact a customer today!',
      data: { data: 'Sohel Rana' },
    },
    trigger: { seconds: 2, repeats: false },
  });
}

export { schedulePushNotification };