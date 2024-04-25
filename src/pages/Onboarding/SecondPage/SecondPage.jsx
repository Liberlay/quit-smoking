import { images } from 'constants'
import { COLORS } from 'constants/theme'
import { Image, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import styles from './secondPage.style'

export const SecondPage = ({ navigation }) => {
  return (
    <OnboardingLayout
      onPress={() => navigation.reset({ index: 0, routes: [{ name: 'ThirdPage' }] })}
    >
      <View style={styles.text_container}>
        <Text style={styles.text_title}>Welcome!</Text>
        <Text style={styles.text_caption}>You're on the right way</Text>
      </View>
      <Image style={styles.image} source={images.cigarette} />
      <View style={styles.container}>
        <LinearGradient
          style={styles.wrapper}
          colors={[COLORS.containerGradientLeft, COLORS.containerGradientRight]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={styles.bottomText}>
            We help people around the world successfully achieve their goals.
          </Text>
          <Text style={styles.bottomText}>
            Let's take the first steps to successfully quit smoking!
          </Text>
        </LinearGradient>
      </View>
    </OnboardingLayout>
  )
}
