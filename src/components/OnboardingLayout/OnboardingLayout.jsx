import images from 'constants/images'
import { Button } from 'components/Button/Button'
import { ImageBackground, SafeAreaView, View } from 'react-native'

import styles from './onboardingLayout.style'

export const OnboardingLayout = ({ children, title, onPress }) => {
  return (
    <ImageBackground style={styles.bg_wrapper} source={images.bg} blurRadius={2}>
      <View style={styles.bg_before}>
        <SafeAreaView style={styles.container}>
          {children}
          <Button title={title || 'Continue'} onPress={onPress} />
        </SafeAreaView>
      </View>
    </ImageBackground>
  )
}
