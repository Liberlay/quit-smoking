import { Text, View } from 'react-native'
import { useUserStore } from 'src/storage/user'
import { Statisctic } from 'components/Statistic/Statistic'
import { PageTracker } from 'components/PageTracker/PageTracker'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import styles from './seventhPage.style'

export const SeventhPage = () => {
  const name = useUserStore((s) => s.settings.name)
  const setIsAuthorized = useUserStore((s) => s.setIsAuthorized)

  return (
    <OnboardingLayout onPress={() => setIsAuthorized(true)}>
      <View style={styles.container}>
        <PageTracker />
        <Text style={styles.title}>
          {name}, based on your information, here’s what you can achieve in one year using our app.
        </Text>
        <View style={styles.graph} />
        <Statisctic />
      </View>
    </OnboardingLayout>
  )
}
