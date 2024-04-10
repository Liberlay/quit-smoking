import { Button, Text, View } from 'react-native'

export const Page = ({ navigation }) => {
  return (
    <View>
      <Text>Page</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}
