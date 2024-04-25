import { useFonts } from 'expo-font'
import { Home } from 'pages/Home/Home'
import { Onboarding } from 'pages/Onboarding'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useUserStore } from 'src/storage/user'

const Stack = createNativeStackNavigator()

export default function App() {
  const isAuthorized = useUserStore((s) => s.isAuthorized)

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
      {!isAuthorized ? (
        <Stack.Navigator initialRouteName="FistPage">
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
          <Stack.Screen
            name="SixthPage"
            component={Onboarding.SixthPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SeventhPage"
            component={Onboarding.SeventhPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}
