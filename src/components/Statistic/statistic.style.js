import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: COLORS[theme].border.primary,
      width: 345,
      height: 140,
      backgroundColor: COLORS[theme].background.primary,
    },

    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },

    icon: {
      width: 20,
      height: 20,
      fill: COLORS[theme].text.primary,

      container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: Number.MAX_SAFE_INTEGER,
        borderColor: COLORS[theme].border.secondary,
      },
    },

    text: {
      fontSize: 16,
      fontFamily: FONT.regular,
      color: COLORS[theme].text.primary,

      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
      },
    },

    divider: {
      position: 'absolute',
      right: 20,
      top: 70,
      width: '80%',
      height: 1,
      backgroundColor: COLORS[theme].text.primary,
    },
  })
