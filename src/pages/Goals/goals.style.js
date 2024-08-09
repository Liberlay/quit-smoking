import { StyleSheet } from 'react-native'

export default makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },

    scroll: {
      gap: 15,
      paddingHorizontal: 10,
      paddingBottom: 200,
      width: '100%',
    },
  })
