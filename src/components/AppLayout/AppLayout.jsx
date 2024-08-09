import { View } from 'react-native'
import { COLORS } from 'constants/theme'
import { useTheme } from 'hooks/useTheme'
import { StatusBar } from 'expo-status-bar'
import { Header } from 'components/Header/Header'
import { LinearGradient } from 'expo-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import styles from './appLayout.style'

export const AppLayout = ({ children }) => {
  const theme = useTheme()

  const insets = useSafeAreaInsets()

  return (
    <LinearGradient
      style={styles.background}
      colors={[COLORS[theme].gradient.top, COLORS[theme].gradient.bottom]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top,
            paddingRight: insets.right,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
          },
        ]}
      >
        <StatusBar animated translucent backgroundColor={'transparent'} />
        <Header />
        {children}
      </View>
    </LinearGradient>
  )
}
