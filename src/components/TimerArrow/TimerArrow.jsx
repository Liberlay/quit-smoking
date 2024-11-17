import { View } from 'react-native'
import { useEffect, useState } from 'react'
import { useIsMounted } from 'hooks/useIsMounted'
import { useThemeStyles } from 'hooks/useThemeStyles'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import makeStyles from './timerArrow.style'

export const TimerArrow = ({ time }) => {
  const styles = useThemeStyles(makeStyles)

  const isMounted = useIsMounted()
  const rotate = useSharedValue(360 + (time / 60) * 360)
  const opacity = useSharedValue(0)

  const animateRotation = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: withTiming(`${(rotate.value = 360 + (isMounted ? (time + 1) / 60 : time / 60) * 360)}deg`, {
          duration: 1000,
          easing: Easing.linear(Easing.linear),
        }),
      },
    ],
    opacity: withTiming((opacity.value = isMounted ? 1 : 0), { duration: 1000 }),
  }))

  return (
    <Animated.View style={[styles.container, animateRotation]}>
      <View style={styles.arrow} />
    </Animated.View>
  )
}
