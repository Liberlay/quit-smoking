import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 30,
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: FONT.bold,
    color: COLORS.dark,
  },
  input: {
    textAlign: 'center',
    width: '60%',
    height: 40,
    borderBottomWidth: 2,
    borderColor: COLORS.dark,
    color: COLORS.dark,
    fontSize: 20,
  },
})
