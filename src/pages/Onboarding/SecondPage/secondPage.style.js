import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingBottom: 120,
    },

    top: {
      alignItems: 'center',
      gap: 10,
      marginTop: 40,

      title: {
        fontSize: 35,
        fontFamily: FONT.bold,
        color: COLORS[theme].text.primary,
      },

      caption: {
        textAlign: 'center',
        fontSize: 28,
        fontFamily: FONT.regular,
        color: COLORS[theme].text.primary,
      },
    },

    image: {
      height: 320,
    },

    bottom: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 40,
      padding: 11,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: COLORS[theme].border.primary,
      width: 345,
      height: 210,
      backgroundColor: COLORS[theme].background.primary,

      text: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: FONT.regular,
        lineHeight: 25,
        letterSpacing: 2,
        color: COLORS[theme].text.primary,
      },
    },
  })
