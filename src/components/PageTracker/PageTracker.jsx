import { View } from 'react-native'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { useNavigationState } from '@react-navigation/native'

import makeStyles from './pageTracker.style'

export const PageTracker = () => {
  const styles = useThemeStyles(makeStyles)
  const navIndex = useNavigationState((state) => state.index)
  const trackerLength = useNavigationState((state) => state.routeNames.length - 2)

  return (
    <View style={styles.container}>
      {[...Array(trackerLength)].map((_, i) => (
        <View key={i} style={[styles.page, navIndex - 2 === i && styles.page.active]} />
      ))}
    </View>
  )
}
