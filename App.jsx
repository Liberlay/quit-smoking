import 'tasks/daily'
import 'utils/notifications'
import 'react-native-reanimated'
import './src/localization/i18n'
import { useFonts } from 'expo-font'
import { Home } from 'pages/Home/Home'
import { Tips } from 'pages/Tips/Tips'
import { Platform } from 'react-native'
import { Goals } from 'pages/Goals/Goals'
import { Onboarding } from 'pages/Onboarding'
import { Profile } from 'pages/Profile/Profile'
import { useUserStore } from 'src/storage/user'
import { ThemeContext } from 'src/context/theme'
import { Settings } from 'pages/Settings/Settings'
import * as Notifications from 'expo-notifications'
import { useEffect, useRef, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomNavigator } from 'components/BottomNavigator/BottomNavigator'
import { registerForPushNotificationsAsync } from 'utils/notifications'
import { processGoals } from 'tasks/goals'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const SettingsStack = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      navigation.reset({ index: 0, routes: [{ name: 'Settings' }] })
    })

    return unsubscribe
  }, [navigation])

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('')
  const [channels, setChannels] = []
  const [notification, setNotification] = useState()
  const notificationListener = useRef()
  const responseListener = useRef()

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => token && setExpoPushToken(token))

    if (Platform.OS === 'android') {
      Notifications.getNotificationChannelsAsync().then((value) => setChannels(value ?? []))
    }
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification)
    })

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response)
    })

    return () => {
      notificationListener.current && Notifications.removeNotificationSubscription(notificationListener.current)
      responseListener.current && Notifications.removeNotificationSubscription(responseListener.current)
    }
  }, [])

  useEffect(() => {
    processGoals()
    const interval = setInterval(processGoals, 60000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    Notifications.setBadgeCountAsync(0)
  }, [])

  const theme = useUserStore((s) => s.settings.theme)
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
        <ThemeContext.Provider value={'light'}>
          <Stack.Navigator initialRouteName="FistPage" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="FistPage" component={Onboarding.FirstPage} />
            <Stack.Screen name="SecondPage" component={Onboarding.SecondPage} />
            <Stack.Screen name="ThirdPage" component={Onboarding.ThirdPage} />
            <Stack.Screen name="FourthPage" component={Onboarding.FourthPage} />
            <Stack.Screen name="FifthPage" component={Onboarding.FifthPage} />
            <Stack.Screen name="SixthPage" component={Onboarding.SixthPage} />
            <Stack.Screen name="SeventhPage" component={Onboarding.SeventhPage} />
            <Stack.Screen name="EighthPage" component={Onboarding.EighthPage} />
          </Stack.Navigator>
        </ThemeContext.Provider>
      ) : (
        <ThemeContext.Provider value={theme}>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <BottomNavigator {...props} />}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Goals" component={Goals} />
            <Tab.Screen name="Tips" component={Tips} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="SettingsStack" component={SettingsStack} />
          </Tab.Navigator>
        </ThemeContext.Provider>
      )}
    </NavigationContainer>
  )
}

// {"startTime":1729386000000,"duration":86400000,"statistics":{"savedMoney":5,"savedTime":10}}
// {"startTime":1729731600000,"duration":86400000,"statistics":{"savedMoney":5,"savedTime":100}}
// {"startTime":1731722400000,"duration":86400000,"statistics":{"savedMoney":5,"savedTime":100}}
// {"startTime":1732413600000,"duration":86400000,"statistics":{"savedMoney":5,"savedTime":100}}
// {"state":{"startTime":1731768906448,"lastProcessingTime":null,"intervals":[{"startTime":1729386000000,"duration":86400000,"statistics":{"savedMoney":5,"savedTime":10}},{"startTime":1729731600000,"duration":86400000,"statistics":{"savedMoney":5,"savedTime":100}},{"startTime":1731722400000,"duration":86400000,"statistics":{"savedMoney":5,"savedTime":100}},{"startTime":1732413600000,"duration":86400000,"statistics":{"savedMoney":5,"savedTime":100}}]},"version":0}
