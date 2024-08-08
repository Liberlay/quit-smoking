import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: '100%',

      onboarding: {
        alignItems: 'center',
        gap: 25,
      },

      app: {
        gap: 10,
      },
    },

    title: {
      fontFamily: FONT.bold,
      color: COLORS[theme].text.primary,

      onboarding: {
        textAlign: 'center',
        fontSize: 22,
      },

      app: {
        fontSize: 18,
      },
    },

    input: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1.5,
      borderRadius: 15,
      borderColor: COLORS[theme].border.secondary,

      container: {
        flexDirection: 'row',
        alignItems: 'center',
      },

      content: {
        textAlign: 'center',
        width: 70,
        height: '100%',
        fontSize: 24,
        fontFamily: FONT.regular,
        color: COLORS[theme].text.primary,
      },

      error: {
        borderWidth: 1.5,
        borderRadius: 15,
        borderColor: COLORS[theme].error.primary,
        backgroundColor: COLORS[theme].error.bg,
      },

      onboarding: {
        height: 60,
      },

      app: {
        height: 50,
      },
    },

    icon: {
      fontSize: 24,
      fontFamily: FONT.regular,
      color: COLORS[theme].text.primary,

      container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1.5,
        borderColor: COLORS[theme].border.secondary,

        error: {
          borderColor: COLORS[theme].error.primary,
        },

        onboarding: {
          width: 60,
          height: 60,
        },

        app: {
          width: 50,
          height: 50,
        },
      },
    },

    controls: {
      fontSize: 24,
      fontFamily: FONT.regular,
      color: COLORS[theme].text.primary,

      container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: '100%',
      },
    },
  })
