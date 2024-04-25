import { images } from 'constants'
import { COLORS } from 'constants/theme'
import { Image, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import styles from './firstPage.style'

export const FirstPage = ({ navigation }) => {
  return (
    <OnboardingLayout title={'Quit now!'} onPress={() => navigation.navigate('SecondPage')}>
      <View style={styles.images_container}>
        <Image style={styles.image_smoke} source={images.smoke} />
        <Image style={styles.image_lungs} source={images.lungs} />
      </View>
      <View style={styles.text_container}>
        <LinearGradient
          style={styles.wrapper}
          colors={[COLORS.containerGradientLeft, COLORS.containerGradientRight]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={styles.text_title}>Congratulations!</Text>
          <Text style={styles.text_caption}>
            Quitting smoking is undeniably one of your most significant well-being choices.
          </Text>
        </LinearGradient>
      </View>
    </OnboardingLayout>
  )
}
