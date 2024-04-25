import { StyleSheet } from 'react-native'
import { COLORS, FONT, SHADOW } from 'constants/theme'

export default styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    borderRadius: 20,
    ...SHADOW,
  },
  disabled: {
    opacity: 0.5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    height: 70,
    borderRadius: 20,
  },
  button_text: {
    fontSize: 24,
    fontFamily: FONT.bold,
    color: COLORS.light,
  },
})
