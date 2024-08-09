import dayjs from 'dayjs'
import { Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { useUserStore } from 'src/storage/user'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { DollarIcon, TimeIcon } from 'constants/icons'
import { useIntervalsStore } from 'src/storage/intervals'

import makeStyles from './statistic.style'

export const Statistic = ({ type }) => {
  const styles = useThemeStyles(makeStyles)
  const [currentTime, setCurrentTime] = useState(Date.now())
  const savedMoney = useIntervalsStore((s) => s.getSavedMoney())
  const savedTime = useIntervalsStore((s) => s.getSavedTime())
  const initialSavedMoney = useUserStore((s) => s.getSavedMoney())
  const initialSavedTime = useUserStore((s) => s.getSavedTime())

  const getSavedTime = (() => {
    const time = type === 'preview' ? initialSavedTime * 525600 : savedTime

    if (time >= 40320)
      return ['Months', `${Math.floor(time / 60 / 24 / 7 / 4)} ${time / 60 / 24 / 7 < 2 ? 'month' : 'months'}`]
    if (time >= 10080)
      return ['Weeks', `${Math.floor(time / 60 / 24 / 7)} ${time / 60 / 24 / 7 < 2 ? 'week' : 'weeks'}`]
    if (time >= 1440) return ['Days', `${Math.floor(time / 60 / 24)} d`]
    if (time >= 60) return ['Hours', `${Math.floor(time / 60)} hr`]
    return ['Minutes', `${Math.floor(time)} min`]
  })()

  useEffect(() => {
    setTimeout(
      () => setCurrentTime(Date.now()),
      dayjs().startOf('minute').add(1, 'minute').toDate().getTime() - Date.now()
    )
  }, [currentTime])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.icon.container}>
          <DollarIcon style={styles.icon} />
        </View>
        <View style={styles.text.container}>
          <Text style={styles.text}>How much you saved</Text>
          <Text style={styles.text}>
            {type === 'preview' ? `${(initialSavedMoney * 525600).toFixed(2)} $` : `${savedMoney.toFixed(2)} $`}
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.icon.container}>
          <TimeIcon style={styles.icon} />
        </View>
        <View style={styles.text.container}>
          <Text style={styles.text}>{`${getSavedTime[0]} of life saved`}</Text>
          <Text style={styles.text}>{getSavedTime[1]}</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  )
}
