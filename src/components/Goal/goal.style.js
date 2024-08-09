import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 8,
      borderColor: COLORS[theme].tile.border,
      width: '100%',
      height: 55,
      backgroundColor: COLORS[theme].tile.bg,
    },

    progress: {
      position: 'absolute',
      borderTopLeftRadius: 7,
      borderBottomLeftRadius: 7,
      height: '100%',
      backgroundColor: COLORS[theme].tile.progress,
    },

    goal: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15,
      paddingLeft: 15,

      icon: {
        width: 22,
        height: 22,
        fill: COLORS.light.text.primary,

        container: {
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderRadius: Number.MAX_SAFE_INTEGER,
          borderColor: COLORS[theme].tile.icon,
          width: 32,
          height: 32,
        },
      },

      text: {
        fontSize: 18,
        fontFamily: FONT.regular,
        color: COLORS.light.text.primary,
      },
    },

    completed: {
      position: 'absolute',
      right: 15,

      icon: {
        width: 22,
        height: 22,
        fill: COLORS.light.text.primary,
      },
    },
  })
