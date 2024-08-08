import * as TaskManager from 'expo-task-manager'
import * as Notifications from 'expo-notifications'
import * as BackgroundFetch from 'expo-background-fetch'
import { schedulePushNotification } from 'utils/notifications'

const DAILY_NOTIFICATION_TASK = 'DAILY_NOTIFICATION_TASK'

TaskManager.defineTask(DAILY_NOTIFICATION_TASK, async () => {
  try {
    // const notificationContent = {
    //   title: 'Daily reminder',
    //   body: 'Daily notification',
    //   data: { data: 'goes here' },

    // }

    // await Notifications.scheduleNotificationAsync({
    //   content: notificationContent,
    //   trigger: null,
    // })

    schedulePushNotification('Daily reminder', 'Daily caption', null)

    return BackgroundFetch.Result.NewData
  } catch (error) {
    console.log(error)
    return BackgroundFetch.Result.Failed
  }
})

BackgroundFetch.registerTaskAsync(DAILY_NOTIFICATION_TASK, {
  minimumInterval: 10,
  stopOnTerminate: false,
  startOnBoot: true,
}).catch((err) => console.log(err))
