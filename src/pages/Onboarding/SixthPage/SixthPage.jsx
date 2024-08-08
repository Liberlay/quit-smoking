import { Input } from 'components/Input'
import { useUserStore } from 'src/storage/user'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { FormProvider, useForm } from 'react-hook-form'
import { CigarettesIcon, IqosIcon, VapeIcon } from 'constants/icons'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import makeStyles from './sixthPage.style'

export const SixthPage = ({ navigation }) => {
  const methods = useForm()

  const styles = useThemeStyles(makeStyles)

  const setSmokeType = useUserStore((s) => s.setSmokeType)

  const onSubmit = ({ smokeType }) => (
    setSmokeType(smokeType),
    navigation.navigate('SeventhPage', { smokeType: methods.getValues('smokeType') })
  )

  return (
    <OnboardingLayout
      title={'Choose what you smoke'}
      onPress={methods.handleSubmit(onSubmit)}
      isDisabled={!methods.formState.isValid}
    >
      <FormProvider {...methods}>
        <Input.Formed.Radio
          name="smokeType"
          required
          content={{
            cigarettes: {
              icon: CigarettesIcon,
              label: 'Cigarettes',
            },
            iqos: {
              icon: IqosIcon,
              label: 'Iqos',
            },
            vape: {
              icon: VapeIcon,
              label: 'Vape',
            },
          }}
          style="onboarding"
        />
      </FormProvider>
    </OnboardingLayout>
  )
}
