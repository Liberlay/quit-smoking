import { createElement, useState } from 'react'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { ArrowBottomIcon, ArrowTopIcon } from 'constants/icons'
import { LayoutAnimation, Text, TouchableOpacity, View } from 'react-native'

import makeStyles from './dropdown.style'

export const Dropdown = ({ icon, label, topContent, children }) => {
  const styles = useThemeStyles(makeStyles)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.top}
        onPress={() => (
          LayoutAnimation.configureNext(LayoutAnimation.create(150, 'easeInEaseOut', 'opacity')), setIsOpen(!isOpen)
        )}
      >
        {createElement(icon, { style: styles.icon })}
        <Text style={styles.label}>{label}</Text>
        <View style={styles.right}>
          <View style={styles.right.content.container}>
            <Text style={styles.right.content}>{topContent}</Text>
          </View>
          {!isOpen ? <ArrowBottomIcon style={styles.icon} /> : <ArrowTopIcon style={styles.icon} />}
        </View>
      </TouchableOpacity>
      {isOpen && children}
    </View>
  )
}
