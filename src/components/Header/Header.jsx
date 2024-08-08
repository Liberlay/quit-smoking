import { useTranslation } from 'react-i18next'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { SettingsIcon, UserIcon } from 'constants/icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import makeStyles from './header.style'

export const Header = () => {
  const route = useRoute()
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const styles = useThemeStyles(makeStyles)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigate('Profile')}>
        <UserIcon style={[styles.icon, route.name === 'Profile' && styles.icon.active]} />
      </TouchableOpacity>
      <Text style={styles.title}>{t(route.name)}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate('SettingsStack')}>
        <SettingsIcon style={[styles.icon, route.name === 'Settings' && styles.icon.active]} />
      </TouchableOpacity>
    </View>
  )
}
