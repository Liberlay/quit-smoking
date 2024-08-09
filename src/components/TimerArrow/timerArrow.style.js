import { COLORS } from 'constants/theme'
import { StyleSheet } from 'react-native'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      alignItems: 'center',
      borderRadius: Number.MAX_SAFE_INTEGER,
      width: 250,
      height: 250,
    },

    arrow: {
      top: -15,
      width: 12,
      height: 0,
      borderBottomWidth: 50,
      borderBottomColor: COLORS[theme].text.primary,
      borderRightWidth: 5,
      borderRightColor: 'transparent',
      borderLeftWidth: 5,
      borderLeftColor: 'transparent',
    },
  })
