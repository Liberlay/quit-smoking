import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      gap: 15,
    },

    top: {
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

      content: {
        fontSize: 18,
        fontFamily: FONT.regular,
        color: COLORS[theme].text.primary,

        container: {
          position: 'absolute',
          right: 30,
        },
      },
    },
  })
