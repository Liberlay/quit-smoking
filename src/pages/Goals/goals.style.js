import { COLORS, FONT } from 'constants/theme'
import { StyleSheet } from 'react-native'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      gap: 10,
      width: '100%',
    },

    tracker: {
      textAlign: 'center',
      fontSize: 18,
      fontFamily: FONT.regular,
      color: COLORS[theme].text.primary,
    },

    scroll: {
      gap: 15,
      paddingHorizontal: 10,
      paddingBottom: 230,
      width: '100%',
    },
  })
