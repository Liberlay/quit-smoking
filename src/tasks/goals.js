import * as TaskManager from 'expo-task-manager'
import * as Notifications from 'expo-notifications'
import * as BackgroundFetch from 'expo-background-fetch'
import { schedulePushNotification } from 'utils/notifications'
import goals from 'src/localization/en/goals'
import { useIntervalsStore } from 'src/storage/intervals'
import dayjs from 'dayjs'
import { useGoalsStore } from 'src/storage/completed'

const GOALS_PROCESSION_TASK = 'GOALS_PROCESSION_TASK'

export const processGoals = () => {
  const intervals = useIntervalsStore.getState().getActualIntervals()
  const goalsValue = {
    time: intervals.reduce((sum, el) => sum + el.duration, 0) / 1000 / 60 / 60,
    money: useIntervalsStore.getState().getSavedMoney(),
    weekly: dayjs().diff(intervals[0].startTime, 'weeks'),
    subscription: 0,
  }
  const completed = useGoalsStore.getState().completed

  for (const key in goals) {
    if (!completed.includes(key) && goalsValue[goals[key].type] >= goals[key].goalValue) {
      useGoalsStore.getState().addCompleted(key)
      // schedulePushNotification('Daily reminder', 'Daily caption', null)
    }
  }
}

TaskManager.defineTask(GOALS_PROCESSION_TASK, async () => {
  try {
    processGoals()
    return BackgroundFetch.Result.NewData
  } catch (error) {
    console.log(error)
    return BackgroundFetch.Result.Failed
  }
})

BackgroundFetch.registerTaskAsync(GOALS_PROCESSION_TASK, {
  minimumInterval: 60,
  stopOnTerminate: false,
  startOnBoot: true,
}).catch((err) => console.log(err))
