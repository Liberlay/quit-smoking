import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      gap: 10,
    },

    title: {
      fontSize: 18,
      fontFamily: FONT.bold,
      color: COLORS[theme].text.primary,
    },

    radio: {
      flexDirection: 'row',

      onboarding: {
        justifyContent: 'space-around',
      },

      app: {
        gap: 8,
      },

      settings: {
        justifyContent: 'center',
        gap: 70,
      },
    },

    item: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },

    icon: {
      fill: COLORS[theme].text.primary,

      onboarding: {
        width: 70,
        height: 70,
      },

      app: {
        width: 30,
        height: 30,
      },

      settings: {
        width: 50,
        height: 50,
      },

      container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,

        onboarding: {
          width: 85,
          height: 85,
        },

        app: {
          width: 45,
          height: 45,
        },

        settings: {
          width: 65,
          height: 65,
        },

        active: {
          borderWidth: 1.5,
          borderRadius: 15,
          borderColor: COLORS[theme].border.secondary,
        },

        error: {
          borderWidth: 1.5,
          borderRadius: 15,
          borderColor: COLORS[theme].error.primary,
          backgroundColor: COLORS[theme].error.bg,
        },
      },
    },

    label: {
      fontSize: 18,
      fontFamily: FONT.medium,
      color: COLORS[theme].text.primary,
    },
  })
