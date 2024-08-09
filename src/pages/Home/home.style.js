import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 35,
    },

    emergency: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 18,
      paddingRight: 8,
      borderWidth: 2,
      borderRadius: 24,
      borderColor: COLORS[theme].error.primary,
      width: 172,
      height: 46,
      backgroundColor: COLORS[theme].error.bg,

      label: {
        color: COLORS[theme].error.primary,
        fontSize: 20,
        fontFamily: FONT.medium,
      },

      circle: {
        borderRadius: Number.MAX_SAFE_INTEGER,
        width: 30,
        height: 30,
        backgroundColor: COLORS[theme].error.primary,
      },
    },

    modal: {
      text: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 25,
      },

      title: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: FONT.medium,
        color: COLORS[theme].emergency.text,
      },

      caption: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: FONT.medium,
        color: COLORS[theme].emergency.text,
      },
    },

    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',

      yes: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 23,
        width: '50%',
        height: 45,
        backgroundColor: COLORS[theme].emergency.buttons.yes.bg,

        text: {
          fontSize: 20,
          fontFamily: FONT.medium,
          color: COLORS[theme].emergency.buttons.yes.text,
        },
      },

      no: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 23,
        width: '50%',
        height: 45,
        backgroundColor: COLORS[theme].emergency.buttons.no.bg,

        text: {
          fontSize: 20,
          fontFamily: FONT.medium,
          color: COLORS[theme].emergency.buttons.no.text,
        },
      },
    },
  })
