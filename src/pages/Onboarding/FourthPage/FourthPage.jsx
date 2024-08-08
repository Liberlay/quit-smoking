import { Input } from 'components/Input'
import { useUserStore } from 'src/storage/user'
import { Keyboard, Pressable } from 'react-native'
import { FormProvider, useForm } from 'react-hook-form'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import styles from './fourthPage.style'

export const FourthPage = ({ navigation }) => {
  const methods = useForm({ mode: 'onChange', defaultValues: { age: 13 } })

  const setAge = useUserStore((s) => s.setAge)

  const onSubmit = ({ age }) => (setAge(age), navigation.navigate('FifthPage'))

  return (
    <OnboardingLayout
      title={'Your age'}
      onPress={methods.handleSubmit(onSubmit)}
      isDisabled={!methods.formState.isValid}
    >
      <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
        <FormProvider {...methods}>
          <Input.Formed.Number
            required
            name={'age'}
            step={1}
            min={13}
            style="onboarding"
            onSubmitEditing={methods.handleSubmit(onSubmit)}
          />
        </FormProvider>
      </Pressable>
    </OnboardingLayout>
  )
}
