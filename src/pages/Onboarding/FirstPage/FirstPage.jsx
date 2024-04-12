import { images } from 'constants'
import { Image, Text, View } from 'react-native'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import styles from './firstPage.style'

export const FirstPage = ({ navigation }) => {
  return (
    <OnboardingLayout title={'Quit now!'} onPress={() => navigation.navigate('SecondPage')}>
      <Image style={styles.image} source={images.happyMan} />
      <View style={styles.text_container}>
        <Text style={styles.text_title}>Congratulations!</Text>
        <Text style={styles.text_caption}>
          Quitting smoking is undeniably one of your most significant well-being choices.
        </Text>
      </View>
    </OnboardingLayout>
  )
}
