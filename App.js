import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './src/pages/Home/Home'
import { Page } from './src/pages/Page/Page'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Page" component={Page} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
