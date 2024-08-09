import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    setting: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      width: '100%',
    },

    icon: {
      width: 25,
      height: 25,
      fill: COLORS[theme].text.primary,
    },

    label: {
      fontSize: 18,
      fontFamily: FONT.regular,
      color: COLORS[theme].text.primary,
    },

    right: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,

      container: {
        position: 'absolute',
        right: 30,
      },

      icon: {
        width: 20,
        height: 20,
        fill: COLORS[theme].text.primary,
      },
    },
  })
