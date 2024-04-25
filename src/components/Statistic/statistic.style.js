import { StyleSheet } from 'react-native'
import { COLORS, FONT, SHADOW } from 'constants/theme'

export default styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    ...SHADOW,
  },
  bg: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 20,
    width: 345,
    height: 140,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  icon_container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: '100%',
    borderColor: COLORS.light,
  },
  icon_top: {
    fontSize: 16,
    color: COLORS.light,
  },
  icon_bottom: {
    width: 20,
    height: 20,
  },
  text_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  text: {
    color: COLORS.light,
    fontSize: 16,
    fontFamily: FONT.regular,
  },
  border: {
    position: 'absolute',
    right: 20,
    top: 70,
    width: '80%',
    height: 1,
    backgroundColor: COLORS.light,
  },
})
