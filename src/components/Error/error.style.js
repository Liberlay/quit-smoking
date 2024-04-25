import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  error: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 20,
    color: COLORS.light,
    backgroundColor: COLORS.error,
    fontFamily: FONT.regular,
  },
})
