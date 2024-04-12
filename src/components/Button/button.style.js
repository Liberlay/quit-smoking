import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 186,
    height: 48,
    borderRadius: 18,
    color: 'black',
    backgroundColor: COLORS.primary,
  },
  button_text: {
    fontSize: 18,
    fontFamily: FONT.medium,
  },
})
