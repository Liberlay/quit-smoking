import * as Device from 'expo-device'
import Constants from 'expo-constants'
import { Platform } from 'react-native'
import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})

export const schedulePushNotification = async (title, body, trigger) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      data: { data: 'data' },
      sound: 'default',
      _contentAvailable: true,
    },
    trigger,
  })

  const badgeCount = await Notifications.getBadgeCountAsync()

  await Notifications.setBadgeCountAsync(badgeCount + 1)
}

export async function registerForPushNotificationsAsync() {
  let token

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    })
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync({
        ios: {
          allowAlert: true,
          allowBadge: true,
          allowProvisional: true,
          allowSound: true,
        },
      })
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!')
      return
    }

    try {
      const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId
      if (!projectId) {
        throw new Error('Project ID not found')
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data
      console.log(token)
    } catch (e) {
      token = `${e}`
    }
  } else {
    alert('Must use physical device for Push Notifications')
  }

  return token
}
