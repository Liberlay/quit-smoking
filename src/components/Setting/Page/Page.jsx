import { createElement } from 'react'
import { ArrowRightIcon } from 'constants/icons'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { Text, TouchableOpacity, View } from 'react-native'

import makeStyles from './page.style'

export const Page = ({ icon, label, children, rightIcon, onPress }) => {
  const styles = useThemeStyles(makeStyles)

  return (
    <TouchableOpacity style={styles.setting} onPress={onPress}>
      {createElement(icon, { style: styles.icon })}
      <Text style={styles.label}>{label}</Text>
      <View style={styles.right}>
        <View style={styles.right.container}>{children}</View>
        {rightIcon ? (
          createElement(rightIcon, { style: styles.right.icon })
        ) : (
          <ArrowRightIcon style={styles.right.icon} />
        )}
      </View>
    </TouchableOpacity>
  )
}
