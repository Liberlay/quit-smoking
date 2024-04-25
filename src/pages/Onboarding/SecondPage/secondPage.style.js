import { StyleSheet } from 'react-native'
import { COLORS, FONT, SHADOW } from 'constants/theme'

export default styles = StyleSheet.create({
  text_container: {
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  text_title: {
    fontSize: 35,
    fontFamily: FONT.bold,
    color: COLORS.dark,
  },
  text_caption: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: FONT.regular,
    color: COLORS.dark,
  },
  image: {
    transform: [{ rotate: '-45deg' }],
    width: 350,
    height: 350,
    ...SHADOW,
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: FONT.regular,
    lineHeight: 25,
    letterSpacing: 2,
    color: COLORS.light,
  },
  container: {
    position: 'absolute',
    bottom: 160,
    borderRadius: 20,
    ...SHADOW,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    padding: 11,
    borderRadius: 20,
    width: 345,
    height: 210,
  },
})
