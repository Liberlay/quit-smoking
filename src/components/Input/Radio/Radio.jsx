import { createElement } from 'react'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { Text, TouchableOpacity, View } from 'react-native'

import makeStyles from './radio.style'

export const Radio = ({ value, onChange, error, title, content, hideLabel, style }) => {
  const styles = useThemeStyles(makeStyles)

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={[styles.radio, styles.radio[style]]}>
        {Object.entries(content).map(([key, obj], i) => (
          <TouchableOpacity key={i} style={styles.item} onPress={() => onChange(key)}>
            <View
              style={[
                styles.icon.container,
                styles.icon.container[style],
                key === value && styles.icon.container.active,
                error && styles.icon.container.error,
              ]}
            >
              {createElement(obj.icon, { style: [styles.icon, styles.icon[style]] })}
            </View>
            {!hideLabel && <Text style={styles.label}>{obj.label}</Text>}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}
