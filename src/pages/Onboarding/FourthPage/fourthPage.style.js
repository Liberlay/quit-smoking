import { COLORS, FONT } from 'constants'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 30,
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    color: COLORS.dark,
    fontSize: 28,
    fontFamily: FONT.bold,
  },
  genders: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
  },
  gender: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    paddingVertical: 15,
    borderRadius: 15,
    width: 120,
    height: 150,
  },
  active: {
    borderWidth: 1,
    borderColor: COLORS.dark,
  },
  image: {
    width: 70,
    height: 70,
  },
  label: {
    color: COLORS.dark,
    fontSize: 18,
    fontFamily: FONT.regular,
  },
})
