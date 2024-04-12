import { FONT } from 'constants/theme'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  image: {
    width: 351,
    height: 351,
    marginTop: 25,
  },
  text_container: {
    alignItems: 'center',
    gap: 40,
  },
  text_title: {
    fontSize: 35,
    fontFamily: FONT.bold,
    color: 'white',
  },
  text_caption: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: FONT.regular,
    color: 'white',
  },
})
