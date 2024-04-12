import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 30,
    width: '100%',
    height: '100%',
    marginTop: 60,
  },
  text: {
    fontSize: 28,
    fontFamily: FONT.bold,
    color: 'white',
  },
  input: {
    textAlign: 'center',
    width: '60%',
    height: 40,
    borderBottomWidth: 2,
    borderColor: COLORS.border,
    color: 'white',
    fontSize: 20,
  },
  error: {
    fontSize: 20,
    color: COLORS.error,
    fontFamily: FONT.regular,
  },
})
