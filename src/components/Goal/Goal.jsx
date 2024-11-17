import { Text, View } from 'react-native'
import { TrophyIcon } from 'constants/icons'
import { useThemeStyles } from 'hooks/useThemeStyles'

import makeStyles from './goal.style'

export const Goal = ({ label, caption, value }) => {
  const styles = useThemeStyles(makeStyles)

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${value * 100}%` }]} />
      <View style={styles.goal}>
        <Text style={styles.goal.label}>{label}</Text>
        <Text style={styles.goal.caption}>{caption}</Text>
      </View>
      {value === 1 && (
        <View style={styles.goal.icon.container}>
          <TrophyIcon style={styles.goal.icon} />
        </View>
      )}
    </View>
  )
}
