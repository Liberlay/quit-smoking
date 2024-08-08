import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    button: {
      position: 'absolute',
      left: '50%',
      bottom: 25,
      transform: [{ translateX: -110 }],
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 20,
      borderColor: COLORS[theme].border.primary,
      width: 220,
      height: 70,
      backgroundColor: COLORS[theme].background.button,

      disabled: {
        opacity: 0.5,
      },

      text: {
        fontSize: 24,
        fontFamily: FONT.bold,
        color: COLORS[theme].text,
      },
    },
  })
