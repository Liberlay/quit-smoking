import { Text, TouchableOpacity } from 'react-native'

import styles from './button.style'

export const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={onPress}>
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  )
}
