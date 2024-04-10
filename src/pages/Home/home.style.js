import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 26,
  },
  users: {
    display: 'flex',
    marginHorizontal: 'auto',
    width: '100%',
    maxWidth: 500,
    gap: 30,
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    height: 100,
    width: 100,
  },
})
