import { View } from 'react-native'
import { useEffect, useState } from 'react'
import { useIsMounted } from 'hooks/useIsMounted'
import { useThemeStyles } from 'hooks/useThemeStyles'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import makeStyles from './timerArrow.style'

export const TimerArrow = ({ time }) => {
  const styles = useThemeStyles(makeStyles)

  const isMounted = useIsMounted()
  const rotate = useSharedValue(0)
  const opacity = useSharedValue(0)
  const [isFirstAnimation, setIsFirstAnimation] = useState(true)

  const animateRotation = useAnimatedStyle(() => {
    const [fullCircle, offset] = (() => {
      // if (time > 3600) return [86400, 2]
      // if (time > 60) return [3600, 1]
      return [60, 0]
    })()

    return {
      transform: [
        {
          rotate: withTiming(
            `${(rotate.value =
              offset * 360 + (isMounted ? (time + 1) / fullCircle : Math.floor(time / fullCircle)) * 360)}deg`,
            {
              duration: 1000,
              easing: !isFirstAnimation ? Easing.linear(Easing.linear) : Easing.inOut(Easing.quad),
            }
          ),
        },
      ],
      opacity: withTiming((opacity.value = isMounted ? 1 : 0), { duration: 1000 }),
    }
  })

  useEffect(() => {
    setTimeout(() => setIsFirstAnimation(false), 1000)
  }, [])

  return (
    <Animated.View style={[styles.container, animateRotation]}>
      <View style={styles.arrow} />
    </Animated.View>
  )
}
