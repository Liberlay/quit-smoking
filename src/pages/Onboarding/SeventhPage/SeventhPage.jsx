import { useState } from 'react'
import { View } from 'react-native'
import { Input } from 'components/Input'
import { useUserStore } from 'src/storage/user'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { FormProvider, useForm } from 'react-hook-form'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import makeStyles from './seventhPage.style'

export const SeventhPage = ({ route, navigation }) => {
  const styles = useThemeStyles(makeStyles)
  const { smokeType } = route.params

  const smokeData = {
    cigarettes: ['howMany', 'inPack', 'price'],
    iqos: ['howMany', 'inPack', 'price'],
    vape: ['howLong', 'inContainer', 'price'],
  }

  const defaultValues = {
    howMany: 20,
    inPack: 20,
    price: 0,
    howLong: 0,
    inContainer: 0,
    containerPrice: 0,
  }

  const inputContent = {
    cigarettes: {
      title1: 'How many cigarettes did you smoke per day?',
      title2: 'Enter the number of cigarettes included per pack?',
      title3: 'How much did a pack of cigarettes cost?',
    },
    iqos: {
      title1: 'How many sticks did you smoke per day?',
      title2: 'How many sticks are included per pack?',
      title3: 'How much did a pack of sticks cost?',
    },
    vape: {
      title1: 'How many days the fluid container lasts?',
      title2: 'How many milliliters are in the container?',
      title3: 'How much money you spend on vape per week?',
    },
  }

  const methods = useForm({
    defaultValues: Object.fromEntries(smokeData[smokeType].map((key) => [key, defaultValues[key]])),
  })

  const [steps, setSteps] = useState([smokeData[smokeType][0]])

  const setSmoke = useUserStore((s) => s.setSmoke)

  const onSubmit = (data) => {
    if (steps.length !== smokeData[smokeType].length) return setSteps([...steps, smokeData[smokeType][steps.length]])
    setSmoke(data)
    navigation.navigate('EighthPage')
  }

  return (
    <OnboardingLayout onPress={methods.handleSubmit(onSubmit)} isDisabled={!methods.formState.isValid}>
      <View style={styles.container}>
        <FormProvider {...methods}>
          {steps.includes('howMany') && (
            <Input.Formed.Number
              title={inputContent[smokeType].title1}
              name="howMany"
              required
              step={1}
              min={1}
              style="onboarding"
              onSubmitEditing={methods.handleSubmit(onSubmit)}
            />
          )}
          {steps.includes('howLong') && (
            <Input.Formed.Number
              title={inputContent[smokeType].title1}
              name="howLong"
              required
              step={0.5}
              min={0.5}
              style="onboarding"
              onSubmitEditing={methods.handleSubmit(onSubmit)}
            />
          )}
          {steps.includes('inPack') && (
            <Input.Formed.Number
              title={inputContent[smokeType].title2}
              name="inPack"
              required
              step={1}
              min={1}
              style="onboarding"
              onSubmitEditing={methods.handleSubmit(onSubmit)}
            />
          )}
          {steps.includes('inContainer') && (
            <Input.Formed.Number
              icon="ml"
              title={inputContent[smokeType].title2}
              name="inContainer"
              required
              step={0.5}
              min={0.1}
              style="onboarding"
              onSubmitEditing={methods.handleSubmit(onSubmit)}
            />
          )}
          {steps.includes('price') && (
            <Input.Formed.Number
              title={inputContent[smokeType].title3}
              icon={'$'}
              name="price"
              required
              step={0.5}
              min={0.1}
              style="onboarding"
              onSubmitEditing={methods.handleSubmit(onSubmit)}
            />
          )}
        </FormProvider>
      </View>
    </OnboardingLayout>
  )
}
