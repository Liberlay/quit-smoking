import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 30,
  },
  graph: {
    width: 270,
    height: 270,
    backgroundColor: 'red',
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: 40,
    fontSize: 28,
    fontFamily: FONT.bold,
    color: COLORS.dark,
  },
})
