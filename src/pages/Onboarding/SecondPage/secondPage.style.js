import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default styles = StyleSheet.create({
  text_container: {
    alignItems: 'center',
    gap: 10,
    marginTop: 40,
  },
  text_title: {
    fontSize: 35,
    fontFamily: FONT.bold,
    color: 'white',
  },
  text_caption: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: FONT.regular,
    color: 'white',
  },
  image: {
    width: 295,
    height: 260,
  },
  bottom: {
    alignItems: 'center',
    gap: 65,
    width: '100%',
    height: '100%',
    paddingHorizontal: 18,
    backgroundColor: COLORS.background,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  bottomText_container: {
    gap: 20,
    paddingVertical: 50,
  },
  bottomText: {
    fontSize: 20,
    fontFamily: FONT.regular,
    color: 'white',
  },
})
