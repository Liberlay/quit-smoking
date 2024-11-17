import { Text, View } from 'react-native'
import { Goal } from 'components/Goal/Goal'
import { GoalsIcon } from 'constants/icons'
import goals from 'src/localization/en/goals'
import { useGoalsStore } from 'src/storage/completed'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { useIntervalsStore } from 'src/storage/intervals'
import { AppLayout } from 'components/AppLayout/AppLayout'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import dayjs from 'dayjs'

import makeStyles from './goals.style'

export const Goals = () => {
  const styles = useThemeStyles(makeStyles)
  const completedGoals = useGoalsStore((s) => s.completed)
  const savedMoney = useIntervalsStore((s) => s.getSavedMoney())
  const actualIntervals = useIntervalsStore((s) => s.getActualIntervals())
  const totalDuration = actualIntervals.reduce((sum, el) => sum + el.duration, 0) / 1000 / 60 / 60

  const goalsValue = {
    time: totalDuration,
    money: savedMoney,
    weekly: dayjs().diff(actualIntervals[0].startTime, 'weeks'),
    subscription: 0,
  }

  const getValue = (key, item) => {
    if (completedGoals.includes(key)) return 1
    if (item.type === 'weekly') return 0
    return Math.min(goalsValue[item.type] / item.goalValue, 1)
  }

  return (
    <AppLayout>
      <View style={styles.container}>
        <Text style={styles.tracker}>
          You've unlocked {((completedGoals.length * 100) / Object.entries(goals).length).toFixed(0)}% goals
        </Text>
        <KeyboardAwareScrollView scrollsToTop enableOnAndroid bounces={false} contentContainerStyle={styles.scroll}>
          {Object.entries(goals)
            .sort(([xKey, x], [yKey, y]) => getValue(yKey, y) - getValue(xKey, x))
            .map(([key, item]) => (
              <Goal key={key} icon={GoalsIcon} label={item.title} caption={item.text} value={getValue(key, item)} />
            ))}
        </KeyboardAwareScrollView>
      </View>
    </AppLayout>
  )
}
