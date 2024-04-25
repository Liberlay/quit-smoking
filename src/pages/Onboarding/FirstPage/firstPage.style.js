import { StyleSheet } from 'react-native'
import { COLORS, FONT, SHADOW } from 'constants/theme'

export default styles = StyleSheet.create({
  images_container: {
    position: 'absolute',
    alignItems: 'center',
  },
  image_smoke: {
    position: 'absolute',
    top: -50,
    left: -140,
    width: 675,
    height: 675,
  },
  text_container: {
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
  text_title: {
    fontSize: 30,
    fontFamily: FONT.bold,
    color: COLORS.light,
  },
  text_caption: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: FONT.regular,
    lineHeight: 25,
    letterSpacing: 2,
    color: COLORS.light,
  },
})
