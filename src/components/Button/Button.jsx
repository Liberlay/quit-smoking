import { COLORS } from 'constants/theme'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, TouchableOpacity } from 'react-native'

import styles from './button.style'

export const Button = ({ onPress, title, isDisabled }) => {
  return (
    <TouchableOpacity
      style={[styles.container, isDisabled && styles.disabled]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <LinearGradient
        style={styles.button}
        colors={[COLORS.containerGradientLeft, COLORS.containerGradientRight]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Text style={styles.button_text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}
