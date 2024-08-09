import { useThemeStyles } from 'hooks/useThemeStyles'
import { Text, TouchableOpacity } from 'react-native'

import makeStyles from './button.style'

export const Button = ({ title, onPress, isDisabled }) => {
  const styles = useThemeStyles(makeStyles)

  return (
    <TouchableOpacity
      style={[styles.button, isDisabled && styles.button.disabled]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Text style={styles.button.text}>{title}</Text>
    </TouchableOpacity>
  )
}
