import { Button, Text, View } from 'react-native'

import styles from './page.style'

export const Page = ({ navigation }) => {
  return (
    <View>
      <Text>Page</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}
