import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderRadius: 8,
      borderColor: COLORS[theme].tile.border,
      width: '100%',
      height: 55,
      overflow: 'hidden',
      backgroundColor: COLORS[theme].tile.bg,
    },

    progress: {
      position: 'absolute',
      height: '100%',
      backgroundColor: COLORS[theme].tile.progress,
    },

    goal: {
      paddingLeft: 15,

      label: {
        fontSize: 18,
        fontFamily: FONT.regular,
        color: COLORS[theme].text.primary,
      },

      caption: {
        fontSize: 14,
        fontFamily: FONT.light,
        color: COLORS[theme].text.primary,
      },

      icon: {
        width: 18,
        height: 18,
        fill: COLORS[theme].tile.icon,

        container: {
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10,
          borderWidth: 1,
          borderRadius: Number.MAX_SAFE_INTEGER,
          borderColor: COLORS[theme].tile.icon,
          width: 32,
          height: 32,
        },
      },
    },
  })
