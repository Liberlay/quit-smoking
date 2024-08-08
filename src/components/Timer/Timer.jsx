import { Text, View } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { useIntervalsStore } from 'src/storage/intervals'
import { TimerArrow } from 'components/TimerArrow/TimerArrow'

import makeStyles from './timer.style'

export const Timer = () => {
  const styles = useThemeStyles(makeStyles)

  const startTime = useIntervalsStore((s) => s.startTime)
  const [now, setNow] = useState(Date.now())
  const intervalRef = useRef(null)

  const time = startTime && now && Math.floor((now - startTime) / 1000)
  const minutes = String(Math.floor((time / 60) % 60)).padStart(2, '0')
  const hours = String(Math.floor((time / (60 * 60)) % 24)).padStart(2, '0')
  const days = Math.floor((time / (60 * 60 * 24)) % 7)
  const weeks = Math.floor(time / (60 * 60 * 24 * 7))

  const formatTime = (() => {
    if (weeks >= 1) return [`${weeks} ${weeks === 1 ? 'week' : 'weeks'}`, `${days} ${days === 1 ? 'day' : 'days'}`]
    if (days >= 1) return [`${days} ${days === 1 ? 'day' : 'days'}`, `${hours}:${minutes}`]
    return [`${hours}:${minutes}`, '']
  })()

  useEffect(() => {
    setNow(Date.now())

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 1000)
  }, [startTime])

  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <TimerArrow key={startTime} time={time} />
        <Text style={styles.timer.label}>Time you didn't smoke</Text>
        <View style={styles.counter.container}>
          <Text style={styles.counter.top}>{formatTime[0]}</Text>
          <Text style={styles.counter.bottom}>{formatTime[1]}</Text>
        </View>
      </View>
    </View>
  )
}
