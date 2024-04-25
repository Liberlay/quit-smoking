import { useState } from 'react'
import { COLORS } from 'constants/theme'
import { Error } from 'components/Error/Error'
import { useUserStore } from 'src/storage/user'
import { useForm, useController } from 'react-hook-form'
import { PageTracker } from 'components/PageTracker/PageTracker'
import { Keyboard, Pressable, Text, TextInput } from 'react-native'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import styles from './thirdPage.style'

export const ThirdPage = ({ navigation }) => {
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
    <OnboardingLayout onPress={handleSubmit(onSubmit)} isDisabled={!isValid}>
      <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
        <PageTracker />
        <Text style={styles.title}>Your name</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={COLORS.dark}
          autoCompleteType="name"
          textContentType="name"
          returnKeyType="next"
          value={value}
          onChangeText={onChange}
          onFocus={() => (setIsFocused(true), clearErrors())}
          onBlur={() => (setIsFocused(false), trigger())}
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        {errors.name && <Error text={errors.name.message} />}
      </Pressable>
    </OnboardingLayout>
  )
}
