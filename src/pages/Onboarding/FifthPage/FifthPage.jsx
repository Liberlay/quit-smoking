import { Input } from 'components/Input'
import { useUserStore } from 'src/storage/user'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { FormProvider, useForm } from 'react-hook-form'
import { FemaleIcon, MaleIcon, NonBinaryIcon } from 'constants/icons'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import makeStyles from './fifthPage.style'

export const FifthPage = ({ navigation }) => {
  const methods = useForm()

  const styles = useThemeStyles(makeStyles)

  const setGender = useUserStore((s) => s.setGender)

  const onSubmit = ({ gender }) => (setGender(gender), navigation.navigate('SixthPage'))

  return (
    <OnboardingLayout
      title={'Your gender'}
      onPress={methods.handleSubmit(onSubmit)}
      isDisabled={!methods.formState.isValid}
    >
      <FormProvider {...methods}>
        <Input.Formed.Radio
          name="genders"
          required
          content={{
            male: {
              icon: MaleIcon,
              label: 'Male',
            },
            female: {
              icon: FemaleIcon,
              label: 'Female',
            },
            nonBinary: {
              icon: NonBinaryIcon,
              label: 'Non-binary',
            },
          }}
          style="onboarding"
        />
      </FormProvider>
    </OnboardingLayout>
  )
}
