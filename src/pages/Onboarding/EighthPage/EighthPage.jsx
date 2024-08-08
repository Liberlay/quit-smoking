import { Chart } from 'components/Chart'
import { Text, View } from 'react-native'
import { useUserStore } from 'src/storage/user'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { useIntervalsStore } from 'src/storage/intervals'
import { Statistic } from 'components/Statistic/Statistic'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import makeStyles from './eighthPage.style'

export const EighthPage = () => {
  const styles = useThemeStyles(makeStyles)
  const name = useUserStore((s) => s.settings.name)
  const setIsAuthorized = useUserStore((s) => s.setIsAuthorized)
  const setStartTime = useIntervalsStore((s) => s.setStartTime)

  return (
    <OnboardingLayout
      title={`${name}, based on your information, here’s what you can achieve in one year using our app.`}
      onPress={() => (setIsAuthorized(true), setStartTime(Date.now()))}
    >
      <View style={styles.container}>
        <View style={styles.chart}>
          <View style={styles.chart.top}>
            <Text style={styles.chart.top.title}>Improving your health</Text>
          </View>
          <View style={styles.chart.container}>
            <Chart.Bar type={'preview'} />
          </View>
        </View>
        <Statistic type="preview" />
      </View>
    </OnboardingLayout>
  )
}
