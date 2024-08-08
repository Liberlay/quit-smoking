import { StyleSheet } from 'react-native'

export default makeStyles = (theme) =>
  StyleSheet.create({
    switch: {
      justifyContent: 'center',
      borderRadius: 13,
      width: 40,
      height: 23,

      thumb: {
        marginHorizontal: 3,
        borderRadius: Number.MAX_SAFE_INTEGER,
        width: 16,
        height: 16,
      },
    },
  })
