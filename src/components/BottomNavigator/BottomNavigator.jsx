import { createElement } from 'react'
import { COLORS } from 'constants/theme'
import { useTheme } from 'hooks/useTheme'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { TouchableOpacity, View } from 'react-native'
import { HomeIcon, TipsIcon, GoalsIcon, BottomBackground } from 'constants/icons'

import makeStyles from './bottomNavigator.style'

export const BottomNavigator = ({ navigation, state }) => {
  const styles = useThemeStyles(makeStyles)
  const buttons = [
    ['Goals', GoalsIcon],
    ['Tips', TipsIcon],
  ]

  return (
    <View style={styles.container}>
      <BottomBackground style={styles.background} borderColor={COLORS[useTheme()].border.primary} />
      <TouchableOpacity style={styles.home.container} onPress={() => navigation.navigate('Home')}>
        <HomeIcon style={[styles.home.icon, state.index === 0 && styles.home.icon.active]} />
      </TouchableOpacity>
      <View style={styles.buttons.wrapper}>
        <View style={styles.buttons.content}>
          {buttons.map(([key, icon], i) => (
            <TouchableOpacity key={i} style={styles.buttons.button} onPress={() => navigation.navigate(key)}>
              {createElement(icon, {
                style: [styles.button.icon, state.index === i + 1 && styles.button.icon.active],
              })}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}
