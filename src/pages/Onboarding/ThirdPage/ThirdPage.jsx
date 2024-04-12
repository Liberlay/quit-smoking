import { useState } from 'react'
import { COLORS } from 'constants/theme'
import { useForm, Controller } from 'react-hook-form'
import { Keyboard, Pressable, Text, TextInput } from 'react-native'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import styles from './thirdPage.style'

export const ThirdPage = ({ navigation }) => {
  const {
    control,
    trigger,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [focused, setIsFocused] = useState(false)
  const placeholder = !focused ? 'Type your name' : ''
  const onSubmit = (data) => (trigger(), navigation.navigate('FourthPage'))

  return (
    <OnboardingLayout onPress={handleSubmit(onSubmit)}>
      <Pressable style={styles.container} onPress={() => Keyboard.isVisible && Keyboard.dismiss()}>
        <Text style={styles.text}>Your Name</Text>
        <Controller
          name="name"
          defaultValue={''}
          control={control}
          rules={{
            required: 'Name is required',
            pattern: { value: /([a-zA-Z]{2,20}$)/, message: 'Filed must contain name' },
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              placeholderTextColor={COLORS.placeholder}
              autoCompleteType="name"
              textContentType="name"
              value={value}
              onChangeText={onChange}
              onFocus={() => (setIsFocused(true), clearErrors())}
              onBlur={() => (setIsFocused(false), trigger())}
            />
          )}
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
      </Pressable>
    </OnboardingLayout>
  )
}
