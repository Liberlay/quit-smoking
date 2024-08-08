import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingBottom: 120,
    },

    image: {
      width: '120%',
      maxWidth: 400,
      height: 'auto',
      aspectRatio: 1,

      container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
    },

    text: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 40,
      marginTop: -20,
      padding: 11,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: COLORS[theme].border.primary,
      width: 345,
      height: 210,
      backgroundColor: COLORS[theme].background.primary,

      title: {
        fontSize: 30,
        fontFamily: FONT.bold,
        color: COLORS[theme].text.primary,
      },

      caption: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: FONT.regular,
        lineHeight: 25,
        letterSpacing: 2,
        color: COLORS[theme].text.primary,
      },
    },
  })
