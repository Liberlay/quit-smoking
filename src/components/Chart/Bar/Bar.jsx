import dayjs from 'dayjs'
import { COLORS } from 'constants/theme'
import { useTheme } from 'hooks/useTheme'
import { useUserStore } from 'src/storage/user'
import { BarChart } from 'react-native-gifted-charts'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { useIntervalsStore } from 'src/storage/intervals'

import makeStyles from './bar.style'

export const Bar = ({ type }) => {
  const styles = useThemeStyles(makeStyles)
  const theme = useTheme()
  const actualIntervals = useIntervalsStore((s) => s.getActualIntervals())
  const initialSavedMoney = useUserStore((s) => s.getSavedMoney())
  const savedPerMonth = useIntervalsStore((s) => s.savedPerMonth())
  const getCurrentInterval = useIntervalsStore((s) => s.getCurrentInterval())

  const data = actualIntervals.map((el) => ({
    value: savedPerMonth * 1440,
    label: dayjs().format('MMM'),
    labelTextStyle: {
      color: COLORS[theme].text.primary,
      transform: [{ rotate: '-45deg' }],
    },
  }))

  data.length > 12 && data.push(getCurrentInterval)

  const previewData = []

  if (type === 'preview') {
    for (let i = 1; i <= 12; i++) {
      i === 1
        ? previewData.push({
            value: initialSavedMoney * 1440,
            label: dayjs().format('MMM'),
            labelTextStyle: {
              color: COLORS[theme].text.primary,
              transform: [{ rotate: '-45deg' }],
            },
          })
        : previewData.push({
            value: initialSavedMoney * 1440 * i,
            label: dayjs()
              .add(i - 1, 'month')
              .format('MMM'),
            labelTextStyle: {
              color: COLORS[theme].text.primary,
              transform: [{ rotate: '-45deg' }],
            },
          })
    }
  }

  return (
    <BarChart
      spacing={8}
      disablePress
      hideYAxisText
      barWidth={20}
      stepHeight={5}
      hideAxesAndRules
      initialSpacing={0}
      yAxisThickness={0}
      yAxisLabelWidth={0}
      frontColor={COLORS[theme].text.primary}
      data={type === 'preview' ? previewData : data}
    />
  )
}
