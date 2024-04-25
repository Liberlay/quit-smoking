import { COLORS } from 'constants/theme'
import { SafeAreaView } from 'react-native'
import { Button } from 'components/Button/Button'
import { LinearGradient } from 'expo-linear-gradient'

import styles from './onboardingLayout.style'

export const OnboardingLayout = ({ children, title, onPress, isDisabled }) => {
  return (
    <LinearGradient
      style={styles.bg}
      colors={[COLORS.bgGradientTop, COLORS.bgGradientBottom]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={styles.container}>
        {children}
        <Button title={title || 'Continue'} onPress={onPress} isDisabled={isDisabled} />
      </SafeAreaView>
    </LinearGradient>
  )
}
