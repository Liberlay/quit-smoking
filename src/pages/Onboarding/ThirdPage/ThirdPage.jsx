import { useState } from 'react'
import { COLORS } from 'constants/theme'
import { useTheme } from 'hooks/useTheme'
import { useUserStore } from 'src/storage/user'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { useForm, useController } from 'react-hook-form'
import { Keyboard, Pressable, Text, TextInput } from 'react-native'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import makeStyles from './thirdPage.style'

export const ThirdPage = ({ navigation }) => {
  const theme = useTheme()
  const styles = useThemeStyles(makeStyles)
  const {
    control,
    trigger,
    clearErrors,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ defaultValues: { name: '' } })

  const {
    field: { value, onChange },
  } = useController({
    name: 'name',
    control,
    rules: {
      required: 'Name is required',
      pattern: { value: /^\p{L}{2,20}$/u, message: 'Filed must contain name' },
    },
  })

  const [focused, setIsFocused] = useState(false)

  const placeholder = !focused ? 'Type your name' : ''

  const setName = useUserStore((s) => s.setName)

  const onSubmit = ({ name }) => (trigger(), setName(name), navigation.navigate('FourthPage'))

  return (
    <OnboardingLayout title={'Your name'} onPress={handleSubmit(onSubmit)} isDisabled={!isValid}>
      <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
        <TextInput
          style={[styles.input, errors.name && styles.input.error]}
          placeholder={placeholder}
          placeholderTextColor={COLORS[theme].text.primary}
          autoCompleteType="name"
          textContentType="name"
          returnKeyType="next"
          value={value}
          onChangeText={onChange}
          onFocus={() => (setIsFocused(true), clearErrors())}
          onBlur={() => (setIsFocused(false), trigger())}
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
      </Pressable>
    </OnboardingLayout>
  )
}
