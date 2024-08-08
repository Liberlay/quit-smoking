import { COLORS } from 'constants/theme'
import { Text, View } from 'react-native'
import { useTheme } from 'hooks/useTheme'
import { StatusBar } from 'expo-status-bar'
import { Button } from 'components/Button/Button'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigationState } from '@react-navigation/native'
import { PageTracker } from 'components/PageTracker/PageTracker'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import makestyles from './onboardingLayout.style'

export const OnboardingLayout = ({ children, title, buttonLabel, onPress, isDisabled }) => {
  const theme = useTheme()
  const insets = useSafeAreaInsets()
  const styles = useThemeStyles(makestyles)
  const nav = useNavigationState((state) => state)

  return (
    <LinearGradient
      style={styles.background}
      colors={[COLORS[theme].gradient.top, COLORS[theme].gradient.bottom]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <KeyboardAwareScrollView
        scrollsToTop
        enableOnAndroid
        extraScrollHeight={50}
        alwaysBounceVertical={false}
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.scroll}
      >
        <View
          style={{
            paddingTop: insets.top,
            paddingRight: insets.right,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
          }}
        >
          <StatusBar animated translucent backgroundColor={'transparent'} />
          {nav.index >= 2 && (
            <View style={styles.header}>
              <PageTracker />
              {title && <Text style={styles.title}>{title}</Text>}
            </View>
          )}
          {children}
        </View>
      </KeyboardAwareScrollView>
      <Button title={buttonLabel || 'Continue'} onPress={onPress} isDisabled={isDisabled} />
    </LinearGradient>
  )
}
