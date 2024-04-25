import { useEffect, useState } from 'react'
import { errorBorder } from 'constants/theme'
import { Keyboard, Text, TextInput, View } from 'react-native'
import { useController, useFormContext } from 'react-hook-form'

import styles from './number.style'

export const Number = ({ title, icon, required, name, step, min }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    rules: {
      required,
      min,
    },
  })

  const [inputValue, setInputValue] = useState(String(value || 0))

  useEffect(() => {
    setInputValue(String(value || 0))
  }, [value])

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.input_wrapper}>
        <View style={styles.input_container}>
          {icon && (
            <View style={styles.icon_container}>
              <Text style={styles.icon}>{icon}</Text>
            </View>
          )}
          <View style={[styles.input, errors[name] && { ...errorBorder }]}>
            <Text
              style={styles.input_controls}
              onPress={() => value !== 0 && onChange(value - step)}
            >
              ―
            </Text>
            <TextInput
              style={styles.input_content}
              value={inputValue}
              onChangeText={setInputValue}
              onBlur={() => (onChange(+inputValue), Keyboard.dismiss())}
              inputMode="decimal"
              maxLength={4}
            />
            <Text style={styles.input_controls} onPress={() => onChange(value + step)}>
              +
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
