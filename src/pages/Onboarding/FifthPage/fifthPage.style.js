import { COLORS, FONT } from 'constants'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 140,
    width: '100%',
    height: '100%',
    marginTop: 60,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontFamily: FONT.bold,
  },
  smokes: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  smoke: {
    alignItems: 'center',
    gap: 15,
    padding: 15,
    borderRadius: 15,
    width: 120,
  },
  active: {
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  image: {
    width: 50,
    height: 50,
  },
  label: {
    color: 'white',
    fontSize: 18,
    fontFamily: FONT.regular,
  },
  error: {
    fontSize: 20,
    color: COLORS.error,
    fontFamily: FONT.regular,
  },
})
