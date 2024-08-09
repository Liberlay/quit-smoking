import { Popup } from 'components/Popup/Popup'
import { createElement, useState } from 'react'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { Text, TouchableOpacity, View } from 'react-native'

import makeStyles from './tip.style'

export const Tip = ({ icon, title, caption }) => {
  const styles = useThemeStyles(makeStyles)
  const [isVisible, setIsVisible] = useState(false)

  return (
    <TouchableOpacity style={styles.container} onPress={() => setIsVisible(true)}>
      <View style={styles.tip}>
        <View style={styles.tip.icon}>{createElement(icon, { style: styles.tip.icon })}</View>
        <View style={styles.tip.content}>
          <Text style={styles.tip.content.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.tip.content.caption} numberOfLines={1}>
            {caption}
          </Text>
        </View>
      </View>
      <Popup style={'tip'} isVisible={isVisible} setIsVisible={setIsVisible}>
        <View style={styles.modal}>
          <Text style={styles.modal.title}>{title}</Text>
          <Text style={styles.modal.caption}>{caption}</Text>
        </View>
      </Popup>
    </TouchableOpacity>
  )
}
