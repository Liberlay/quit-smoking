import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      padding: 15,
      borderWidth: 1,
      borderRadius: 16,
      width: '100%',
      overflow: 'hidden',
      borderColor: COLORS[theme].tile.border,
      backgroundColor: COLORS[theme].tile.progress,
    },

    tip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,

      icon: {
        width: 40,
        height: 40,
        fill: COLORS[theme].text.primary,
        stroke: COLORS[theme].text.primary,
      },

      content: {
        gap: 5,
        paddingRight: 15,
        width: '90%',

        title: {
          fontSize: 20,
          fontFamily: FONT.medium,
          color: COLORS[theme].text.primary,
        },

        caption: {
          fontSize: 14,
          fontFamily: FONT.light,
          color: COLORS[theme].text.primary,
        },
      },
    },

    modal: {
      alignItems: 'center',
      gap: 10,
      padding: 15,

      title: {
        fontSize: 24,
        fontFamily: FONT.medium,
        color: COLORS[theme].text.primary,
      },

      caption: {
        textAlign: 'justify',
        fontSize: 20,
        fontFamily: FONT.light,
        color: COLORS[theme].text.primary,
      },
    },
  })
