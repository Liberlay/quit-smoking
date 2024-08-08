import { Input } from 'components/Input'
import { THEMES } from 'constants/theme'
import { useTheme } from 'hooks/useTheme'
import { Setting } from 'components/Setting'
import * as WebBrowser from 'expo-web-browser'
import { useUserStore } from 'src/storage/user'
import * as Notifications from 'expo-notifications'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { AppLayout } from 'components/AppLayout/AppLayout'
import { Alert, Linking, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {
  BellIcon,
  CrownBgIcon,
  CrownIcon,
  MailIcon,
  MoonIcon,
  NoteIcon,
  OpenExternalIcon,
  PaperIcon,
  RestoreIcon,
  SunIcon,
} from 'constants/icons'

import makeStyles from './settings.style'

export const Settings = ({ navigation }) => {
  const styles = useThemeStyles(makeStyles)
  const deviceTheme = useTheme()
  const userTheme = useUserStore((s) => s.settings.theme)
  const setTheme = useUserStore((s) => s.setTheme)

  const checkNotificationsPermissions = async () => {
    const settings = await Notifications.getPermissionsAsync()

    if (settings.granted || settings.ios.status === Notifications.IosAuthorizationStatus.AUTHORIZED) {
      return Alert.alert('Permission granted', "You've already granted notification permission")
    }
    return Alert.alert('Permission denied', 'Open app settings to grant permission', [
      { text: 'Cancel', style: 'destructive' },
      { text: 'Open Settings', onPress: () => Linking.openSettings() },
    ])
  }

  return (
    <AppLayout>
      <View style={styles.container}>
        <KeyboardAwareScrollView scrollsToTop enableOnAndroid bounces={false} contentContainerStyle={styles.scroll}>
          <View style={styles.banner}>
            <CrownBgIcon style={styles.bgIcon} />
            <View style={styles.top}>
              <CrownIcon style={styles.top.icon} />
              <Text style={styles.top.title}>PRO OFFER</Text>
            </View>
            <View style={styles.bottom}>
              <Text style={styles.bottom.caption}>Premium Features</Text>
              <TouchableOpacity style={styles.bottom.button}>
                <Text style={styles.bottom.button.text}>Get it now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Setting.Dropdown
              icon={MoonIcon}
              label={'Appearance'}
              topContent={THEMES.map(([key, label]) => key === userTheme && label)}
            >
              <View style={styles.dropdown}>
                <Input.Radio
                  content={{
                    light: { icon: SunIcon, label: 'Light' },
                    dark: { icon: MoonIcon, label: 'Dark' },
                  }}
                  value={deviceTheme}
                  onChange={setTheme}
                  style="settings"
                />
                <View style={styles.deviceTheme}>
                  <Text style={styles.deviceTheme.label}>Use device settings</Text>
                  <Input.Switch
                    value={userTheme === null ? true : false}
                    onChange={() => (userTheme !== null ? setTheme(null) : setTheme(deviceTheme))}
                  />
                </View>
              </View>
            </Setting.Dropdown>
            <Setting.Page icon={BellIcon} label={'Notifications'} onPress={() => checkNotificationsPermissions()} />
            <Setting.Page icon={RestoreIcon} label={'Restore Purchase '} />
          </View>
          <View style={styles.wrapper}>
            <Setting.Page
              icon={MailIcon}
              label={'Contact Us'}
              rightIcon={OpenExternalIcon}
              onPress={() => WebBrowser.openBrowserAsync('https://google.com')}
            />
            <Setting.Page
              icon={PaperIcon}
              label={'Terms of Use'}
              rightIcon={OpenExternalIcon}
              onPress={() => WebBrowser.openBrowserAsync('https://google.com')}
            />
            <Setting.Page
              icon={NoteIcon}
              label={'Privacy Policy'}
              rightIcon={OpenExternalIcon}
              onPress={() => WebBrowser.openBrowserAsync('https://google.com')}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </AppLayout>
  )
}
