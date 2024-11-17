import { useState } from 'react'
import { Popup } from 'components/Popup/Popup'
import { Timer } from 'components/Timer/Timer'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { useIntervalsStore } from 'src/storage/intervals'
import { AppLayout } from 'components/AppLayout/AppLayout'
import { Statistic } from 'components/Statistic/Statistic'
import { Text, TouchableOpacity, View } from 'react-native'

import makeStyles from './home.style'

export const Home = () => {
  const styles = useThemeStyles(makeStyles)
  const startTime = useIntervalsStore((s) => s.startTime)
  const setStartTime = useIntervalsStore((s) => s.setStartTime)
  const saveCurrentInterval = useIntervalsStore((s) => s.saveCurrentInterval)
  const [isVisible, setIsVisible] = useState(false)

  const resetTimer = () => {
    saveCurrentInterval()
    setStartTime(Date.now())
  }

  return (
    <AppLayout>
      <View style={styles.container}>
        <Timer key={startTime} />
        <TouchableOpacity style={styles.emergency} onPress={() => setIsVisible(true)}>
          <Text style={styles.emergency.label}>Emergency</Text>
          <View style={styles.emergency.circle} />
          <Popup style="warning" isVisible={isVisible} setIsVisible={setIsVisible}>
            <View style={styles.modal.text}>
              <Text style={styles.modal.title}>Do you really want to start smoking?</Text>
              <Text style={styles.modal.caption}>If you press the yes button, the timer will reset.</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.buttons.yes} onPress={() => (resetTimer(), setIsVisible(false))}>
                <Text style={styles.buttons.yes.text}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons.no}>
                <Text style={styles.buttons.no.text}>No</Text>
              </TouchableOpacity>
            </View>
          </Popup>
        </TouchableOpacity>
        <Statistic />
      </View>
    </AppLayout>
  )
}
