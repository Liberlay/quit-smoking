import { StyleSheet } from 'react-native'
import { COLORS, FONT } from 'constants/theme'

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 20,
  },
  page: {
    padding: 5,
    borderRadius: 30,
    backgroundColor: COLORS.dark,
  },
  active: {
    paddingHorizontal: 10,
  },
})
