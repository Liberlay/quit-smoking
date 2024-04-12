import { images } from 'constants'
import { Image, Text, View } from 'react-native'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import styles from './secondPage.style'

export const SecondPage = ({ navigation }) => {
  return (
    <OnboardingLayout onPress={() => navigation.navigate('ThirdPage')}>
      <View style={styles.text_container}>
        <Text style={styles.text_title}>Welcome!</Text>
        <Text style={styles.text_caption}>You're on the right way</Text>
      </View>
      <Image style={styles.image} source={images.globe} />
      <View style={styles.bottom}>
        <View style={styles.bottomText_container}>
          <Text style={styles.bottomText}>
            We help people around the world successfully achieve their goals.
          </Text>
          <Text style={styles.bottomText}>
            Let's take the first steps to successfully quit smoking!
          </Text>
        </View>
      </View>
    </OnboardingLayout>
  )
}
