import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      gap: 10,
      width: '100%',
      height: '100%',
    },

    input: {
      textAlign: 'center',
      width: '60%',
      height: 40,
      borderBottomWidth: 2,
      borderColor: COLORS[theme].border.primary,
      color: COLORS[theme].text.primary,
      fontSize: 20,
      fontFamily: FONT.regular,

      error: {
        borderColor: COLORS[theme].error.primary,
      },
    },

    error: {
      fontSize: 20,
      fontFamily: FONT.medium,
      color: COLORS[theme].error.primary,
    },
  })
