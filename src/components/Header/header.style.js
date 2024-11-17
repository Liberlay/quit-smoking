import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 20,
      width: '100%',
    },

    icon: {
      width: 25,
      height: 25,
      fill: COLORS[theme].link.unactive,

      active: {
        fill: COLORS[theme].link.active,
      },
    },

    title: {
      fontSize: 24,
      fontFamily: FONT.bold,
      color: COLORS[theme].text.primary,
    },
  })
