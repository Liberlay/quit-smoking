import icons from 'constants/icons'
import { COLORS } from 'constants/theme'
import { useUserStore } from 'src/storage/user'
import { Image, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import styles from './statistic.style'

export const Statisctic = () => {
  const settings = useUserStore((s) => s.settings)

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.bg}
        colors={[COLORS.containerGradientLeft, COLORS.containerGradientRight]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <View style={styles.content}>
          <View style={styles.icon_container}>
            <Text style={styles.icon_top}>$</Text>
          </View>
          <View style={styles.text_container}>
            <Text style={styles.text}>How much you saved</Text>
            <Text style={styles.text}>
              {settings.smokeType === 'vape'
                ? 52 * settings.smoke.howMany
                : ((365 * settings.smoke.howMany) / settings.smoke.inPack) *
                  settings.smoke.packPrice}{' '}
              $
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.icon_container}>
            <Image style={styles.icon_bottom} source={icons.tree} />
          </View>
          <View style={styles.text_container}>
            <Text style={styles.text}>Years of life saved</Text>
            <Text style={styles.text}>12 years</Text>
          </View>
        </View>
        <View style={styles.border} />
      </LinearGradient>
    </View>
  )
}
