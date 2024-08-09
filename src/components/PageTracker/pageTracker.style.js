import { COLORS } from 'constants/theme'
import { StyleSheet } from 'react-native'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15,
      marginTop: 20,
    },

    page: {
      padding: 5,
      borderRadius: 30,
      backgroundColor: COLORS[theme].text.primary,

      active: {
        paddingHorizontal: 10,
      },
    },
  })
