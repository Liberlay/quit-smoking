import { Text, View } from 'react-native'

import styles from './error.style'

export const Error = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{text}</Text>
    </View>
  )
}
