import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 30,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: 40,
    fontSize: 28,
    fontFamily: FONT.bold,
    color: COLORS.dark,
  },
  input_wrapper: {
    alignItems: 'center',
    gap: 15,
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_container: {
    position: 'absolute',
    left: -90,
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 65,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: COLORS.dark,
  },
  icon: {
    fontSize: 24,
    fontFamily: FONT.regular,
    color: COLORS.dark,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingHorizontal: 20,
    width: 170,
    height: 65,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: COLORS.dark,
  },
  input_content: {
    textAlign: 'center',
    width: '100%',
    fontSize: 24,
    fontFamily: FONT.regular,
    color: COLORS.dark,
  },
  input_controls: {
    fontSize: 24,
    fontFamily: FONT.regular,
    color: COLORS.dark,
  },
})
