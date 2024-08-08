import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },

    scroll: {
      alignItems: 'center',
      gap: 20,
      paddingBottom: 200,
      paddingHorizontal: 15,
    },

    banner: {
      gap: 10,
      padding: 25,
      borderWidth: 1,
      borderRadius: 16,
      width: '100%',
      overflow: 'hidden',
      borderColor: COLORS[theme].border.primary,
      backgroundColor: COLORS[theme].background.primary,
    },

    bgIcon: {
      position: 'absolute',
      top: -20,
      right: -20,
      width: 240,
      height: 240,
      opacity: 0.5,
      fill: COLORS[theme].text.primary,
    },

    top: {
      gap: 25,

      icon: {
        width: 30,
        height: 25,
        fill: COLORS[theme].text.primary,
      },

      title: {
        fontSize: 24,
        fontFamily: FONT.bold,
        color: COLORS[theme].text.primary,
      },
    },

    bottom: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

      caption: {
        fontSize: 20,
        fontFamily: FONT.medium,
        color: COLORS[theme].text.primary,
      },

      button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 25,
        width: 110,
        height: 50,
        borderColor: COLORS[theme].border.primary,
        backgroundColor: COLORS[theme].background.primary,

        text: {
          fontSize: 16,
          fontFamily: FONT.medium,
          color: COLORS[theme].text.primary,
        },
      },
    },

    wrapper: {
      gap: 30,
      padding: 20,
      borderWidth: 1,
      borderRadius: 16,
      width: '100%',
      borderColor: COLORS[theme].border.primary,
      backgroundColor: COLORS[theme].background.primary,
    },

    dropdown: {
      gap: 15,
    },

    deviceTheme: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,

      label: {
        fontSize: 18,
        fontFamily: FONT.regular,
        color: COLORS[theme].text.primary,
      },
    },
  })
