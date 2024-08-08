import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: Number.MAX_SAFE_INTEGER,
      borderColor: COLORS[theme].border.timer,
      width: 300,
      height: 300,
    },

    timer: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 15,
      width: 250,
      height: 250,
      borderRadius: Number.MAX_SAFE_INTEGER,
      backgroundColor: COLORS[theme].background.primary,

      label: {
        fontSize: 12,
        fontFamily: FONT.medium,
        color: COLORS[theme].text.primary,
      },
    },

    counter: {
      container: {
        alignItems: 'center',
      },

      top: {
        fontSize: 42,
        fontFamily: FONT.medium,
        color: COLORS[theme].text.title,
      },

      bottom: {
        fontSize: 24,
        fontFamily: FONT.medium,
        color: COLORS[theme].link.unactive,
      },
    },
  })
