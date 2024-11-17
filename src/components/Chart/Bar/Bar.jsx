import dayjs from 'dayjs'
import { COLORS } from 'constants/theme'
import { useTheme } from 'hooks/useTheme'
import { BarChart } from 'react-native-gifted-charts'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { useIntervalsStore } from 'src/storage/intervals'

import makeStyles from './bar.style'

export const Bar = ({ type }) => {
  const styles = useThemeStyles(makeStyles)
  const theme = useTheme()
  const initialSavedTime = useIntervalsStore((s) => s.getSavedTime())
  const actualIntervals = useIntervalsStore((s) => s.getActualIntervals())

  const monthsData = actualIntervals.reduce((sum, el) => {
    const i = dayjs(el.startTime).year() * 12 + dayjs(el.startTime).month() - (dayjs().year() * 12 + dayjs().month())
    if (i >= -11) sum[i] = (sum[i] ?? 0) + el.statistics.savedTime * 1440
    return sum
  }, {})
  console.log(monthsData)

  const displayData = [...Array(12)]
    .map((_, i) => i - 11)
    .map((monthIndex) => ({
      value:
        type === 'preview'
          ? initialSavedTime + monthIndex + 12
          : monthsData[monthIndex]
          ? monthsData[monthIndex] * (1 + monthIndex * 0.05)
          : 0,
      label: dayjs()
        .subtract(12 - monthIndex, 'month')
        .format('MMM'),
      labelTextStyle: {
        color: COLORS[theme].text.primary,
        transform: [{ rotate: '-45deg' }],
      },
    }))

  return (
    <BarChart
      spacing={8}
      scrollToEnd
      disablePress
      hideYAxisText
      barWidth={20}
      stepHeight={5}
      hideAxesAndRules
      initialSpacing={0}
      yAxisThickness={0}
      yAxisLabelWidth={0}
      frontColor={COLORS[theme].text.primary}
      data={displayData}
    />
  )
}
