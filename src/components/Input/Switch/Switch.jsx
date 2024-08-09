import { useEffect } from 'react'
import { COLORS } from 'constants/theme'
import { Pressable } from 'react-native'
import { useTheme } from 'hooks/useTheme'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import makeStyles from './switch.style'

export const Switch = ({ value, onChange }) => {
  const theme = useTheme()
  const styles = makeStyles(theme)
  const translateX = useSharedValue(0)

  const progress = useDerivedValue(() => withTiming(value ? 17 : 0))

  const switchBackground = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 17],
      [COLORS[theme].switch.off.bg, COLORS[theme].switch.on.bg]
    ),
  }))

  const thumbStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(value ? 17 : 0) }],
    backgroundColor: interpolateColor(
      progress.value,
      [0, 17],
      [COLORS[theme].switch.off.thumb, COLORS[theme].switch.on.thumb]
    ),
  }))

  useEffect(() => {
    value ? (translateX.value = 17) : (translateX.value = 0)
  }, [value, translateX])

  return (
    <Pressable style={styles.container} onPress={() => onChange()}>
      <Animated.View style={[styles.switch, switchBackground]}>
        <Animated.View style={[styles.switch.thumb, thumbStyles]} />
      </Animated.View>
    </Pressable>
  )
}
