import { COLORS } from 'constants/theme'
import { StyleSheet } from 'react-native'

export default makeStyles = (theme) =>
  StyleSheet.create({
    blurContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },

    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },

    modal: {
      warning: {
        borderWidth: 2,
        borderRadius: 25,
        borderColor: COLORS[theme].emergency.border,
        backgroundColor: COLORS[theme].emergency.background.red,
      },

      tip: {
        borderWidth: 2,
        borderRadius: 25,
        borderColor: COLORS[theme].border.primary,
        backgroundColor: COLORS[theme].tip,
      },
    },

    modalBg: {
      borderRadius: 23,

      warning: {
        backgroundColor: COLORS[theme].emergency.background.theme,
      },
    },
  })
