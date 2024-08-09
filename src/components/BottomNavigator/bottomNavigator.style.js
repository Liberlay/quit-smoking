import { COLORS } from 'constants/theme'
import { StyleSheet } from 'react-native'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      justifyContent: 'flex-end',
      bottom: 0,
      width: '100%',
    },

    background: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      fill: COLORS[theme].background.button,
    },

    home: {
      container: {
        position: 'absolute',
        left: '50%',
        bottom: 32,
        transform: [{ translateX: -40 }],
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: Number.MAX_SAFE_INTEGER,
        borderColor: COLORS[theme].border.primary,
        width: 80,
        height: 80,
        zIndex: 1,
        backgroundColor: COLORS[theme].background.button,
      },

      icon: {
        width: 40,
        height: 40,
        fill: COLORS[theme].link.unactive,

        active: {
          fill: COLORS[theme].link.active,
        },
      },
    },

    buttons: {
      wrapper: {
        justifyContent: 'center',
        width: '100%',
        height: 72,
      },

      content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        width: '100%',
      },
    },
    button: {
      alignItems: 'center',
      width: 50,

      icon: {
        width: 35,
        height: 35,
        fill: COLORS[theme].link.unactive,

        active: {
          fill: COLORS[theme].link.active,
        },
      },
    },
  })
