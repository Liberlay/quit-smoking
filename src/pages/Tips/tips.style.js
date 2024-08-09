import { StyleSheet } from 'react-native'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },

    scroll: {
      gap: 15,
      paddingHorizontal: 15,
      paddingBottom: 200,
    },
  })
