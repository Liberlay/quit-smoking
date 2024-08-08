import { images } from 'constants'
import { Image, Text, View } from 'react-native'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import makeStyles from './secondPage.style'

export const SecondPage = ({ navigation }) => {
  const styles = useThemeStyles(makeStyles)

  return (
    <OnboardingLayout onPress={() => navigation.navigate('ThirdPage')}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.top.title}>Welcome!</Text>
          <Text style={styles.top.caption}>You're on the right way</Text>
        </View>
        <Image style={styles.image} source={images.cigarette} />
        <View style={styles.bottom}>
          <Text style={styles.bottom.text}>We help people around the world successfully achieve their goals.</Text>
          <Text style={styles.bottom.text}>Let's take the first steps to successfully quit smoking!</Text>
        </View>
      </View>
    </OnboardingLayout>
  )
}
