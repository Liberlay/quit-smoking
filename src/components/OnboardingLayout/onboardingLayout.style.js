import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default makeStyles = (theme) =>
  StyleSheet.create({
    background: {
      width: '100%',
      height: '100%',
    },

    scroll: {
      paddingBottom: 200,
      width: '100%',
    },

    header: {
      alignItems: 'center',
      gap: 40,
      marginBottom: 40,
    },

    title: {
      textAlign: 'center',
      fontSize: 28,
      fontFamily: FONT.bold,
      color: COLORS[theme].text.primary,
    },
  })
