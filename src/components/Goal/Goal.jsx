import { createElement } from 'react'
import { Text, View } from 'react-native'
import { TrophyIcon } from 'constants/icons'
import * as Notifications from 'expo-notifications'
import { useThemeStyles } from 'hooks/useThemeStyles'

import makeStyles from './goal.style'

export const Goal = ({ icon, label, value, goalValue }) => {
  const styles = useThemeStyles(makeStyles)
  const currentProgress = (value * 100) / goalValue

  {
    currentProgress >= 100 &&
      Notifications.scheduleNotificationAsync({
        content: { title: "You've unlocked new achievment", body: `You unlock achievment ${label}` },
        trigger: null, // Установка на немедленное выполнение в фоновом режиме
      })
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.progress,
          {
            width: `${currentProgress <= 100 ? currentProgress : 100}%`,
            borderRadius: currentProgress >= 100 ? 7 : undefined,
          },
        ]}
      />
      <View style={styles.goal}>
        <View style={styles.goal.icon.container}>{createElement(icon, { style: styles.goal.icon })}</View>
        <Text style={styles.goal.text}>{label}</Text>
      </View>
      {value >= goalValue && (
        <View style={styles.completed}>
          <TrophyIcon style={styles.completed.icon} />
        </View>
      )}
    </View>
  )
}
