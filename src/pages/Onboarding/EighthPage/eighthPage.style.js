import { COLORS, FONT } from 'constants/theme'
import { StyleSheet } from 'react-native'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      gap: 30,
      paddingHorizontal: 15,
      width: '100%',
    },

    chart: {
      width: '100%',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderRadius: 16,
      borderColor: COLORS[theme].border.primary,
      height: 200,
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
        paddingBottom: 20,
        paddingHorizontal: 15,
      },
    },
  })
