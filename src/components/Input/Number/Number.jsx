import { useEffect, useState } from 'react'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import makeStyles from './number.style'

export const Number = ({ value, onChange, onSubmitEditing, error, title, icon, step, style }) => {
  const styles = useThemeStyles(makeStyles)

  const [inputValue, setInputValue] = useState(String(value || 0))

  useEffect(() => {
    setInputValue(String(value || 0))
    onChange
  }, [value])

  return (
    <View style={[styles.container, styles.container[style]]}>
      {title && <Text style={[styles.title, styles.title[style]]}>{title}</Text>}
      <View style={styles.input.container}>
        <View style={[styles.input, styles.input[style], error && styles.input.error]}>
          {icon && (
            <View style={[styles.icon.container, styles.icon.container[style], error && styles.icon.container.error]}>
              <Text style={styles.icon}>{icon}</Text>
            </View>
          )}
          <TouchableOpacity style={styles.controls.container} onPress={() => value !== 0 && onChange(value - step)}>
            <Text style={styles.controls}>―</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input.content}
            maxLength={4}
            value={inputValue}
            inputMode="decimal"
            onChangeText={setInputValue}
            onSubmitEditing={onSubmitEditing}
            onBlur={() => onChange(+inputValue)}
          />
          <TouchableOpacity
            style={styles.controls.container}
            onPress={() => value + 1 < 10000 && onChange(value + step)}
          >
            <Text style={styles.controls}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
