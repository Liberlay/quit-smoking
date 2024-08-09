import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      gap: 20,
      width: '100%',
      height: '100%',
    },

    top: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 17,
      paddingHorizontal: 20,

      icon: {
        width: 35,
        height: 35,
        fill: COLORS[theme].link.active,

        wrapper: {
          alignItems: 'center',
          justifyContent: 'center',
          width: 68,
          height: 68,
          borderWidth: 1,
          borderRadius: Number.MAX_SAFE_INTEGER,
          borderColor: COLORS[theme].border.secondary,
        },
      },
    },

    user: {
      gap: 5,

      name: {
        fontSize: 24,
        fontFamily: FONT.bold,
        color: COLORS[theme].text.primary,
      },
      age: {
        fontSize: 16,
        fontFamily: FONT.medium,
        color: COLORS[theme].text.primary,
      },
    },

    scroll: {
      gap: 20,
      paddingBottom: 200,
      paddingHorizontal: 20,
    },

    chart: {
      justifyContent: 'space-between',
      borderWidth: 1,
      borderRadius: 16,
      height: 200,
      borderColor: COLORS[theme].border.primary,
      backgroundColor: COLORS[theme].background.primary,

      top: {
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: COLORS[theme].border.secondary,

        title: {
          fontSize: 20,
          fontFamily: FONT.medium,
          color: COLORS[theme].text.primary,
        },
      },

      container: {
        paddingHorizontal: 15,
        paddingBottom: 20,
      },
    },

    settings: {
      gap: 10,
      padding: 15,
      borderWidth: 1,
      borderRadius: 16,
      borderColor: COLORS[theme].border.primary,
      backgroundColor: COLORS[theme].background.primary,
    },
  })
