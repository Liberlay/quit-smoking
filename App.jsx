import { useFonts } from 'expo-font'
import { Onboarding } from 'pages/Onboarding'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    RThin: require('fonts/Roboto-Thin.ttf'),
    RLight: require('fonts/Roboto-Light.ttf'),
    RRegular: require('fonts/Roboto-Regular.ttf'),
    RMedium: require('fonts/Roboto-Medium.ttf'),
    RBold: require('fonts/Roboto-Bold.ttf'),
  })

  if (!fontsLoaded) return null

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FifthPage">
        <Stack.Screen
          name="FistPage"
          component={Onboarding.FirstPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SecondPage"
          component={Onboarding.SecondPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ThirdPage"
          component={Onboarding.ThirdPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FourthPage"
          component={Onboarding.FourthPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FifthPage"
          component={Onboarding.FifthPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
