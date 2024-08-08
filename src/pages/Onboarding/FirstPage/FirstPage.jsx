import { images } from 'constants'
import { Image, Text, View } from 'react-native'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import makeStyles from './firstPage.style'

export const FirstPage = ({ navigation }) => {
  const styles = useThemeStyles(makeStyles)

  return (
    <OnboardingLayout buttonLabel={'Quit now!'} onPress={() => navigation.navigate('SecondPage')}>
      <View style={styles.container}>
        <View style={styles.image.container}>
          <Image style={styles.image} source={images.lungsInSmoke} />
        </View>
        <View style={styles.text}>
          <Text style={styles.text.title}>Congratulations!</Text>
          <Text style={styles.text.caption}>
            Quitting smoking is undeniably one of your most significant well-being choices.
          </Text>
        </View>
      </View>
    </OnboardingLayout>
  )
}
