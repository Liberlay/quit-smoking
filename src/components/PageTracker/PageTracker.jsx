import { View } from 'react-native'
import { useNavigationState } from '@react-navigation/native'

import styles from './pageTracker.style'

export const PageTracker = () => {
  const navIndex = useNavigationState((state) => state.index)

  return (
    <View style={styles.container}>
      {[...Array(5)].map((_, i) => (
        <View key={i} style={[styles.page, navIndex === i && styles.active]} />
      ))}
    </View>
  )
}
