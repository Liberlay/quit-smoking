import { useState } from 'react'
import { Input } from 'components/Input'
import { useUserStore } from 'src/storage/user'
import { Keyboard, Pressable } from 'react-native'
import { FormProvider, useForm } from 'react-hook-form'
import { PageTracker } from 'components/PageTracker/PageTracker'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import styles from './sixthPage.style'

const smokeSteps = {
  cigarettes: ['howMany', 'inPack', 'packPrice'],
  iqos: ['howMany', 'packPrice'],
  vape: ['howMany'],
}

export const SixthPage = ({ route, navigation }) => {
  const { smokeType } = route.params

  const methods = useForm({
    defaultValues: Object.fromEntries(smokeSteps[smokeType].map((key) => [key, 0])),
  })

  const inputContent = {
    cigarettes: {
      title1: 'How many cigarettes did you smoke per day?',
      title2: 'Enter the nubmer of cigarettes included per pack',
      title3: 'How much did a pack of cigarettes cost?',
    },
    iqos: {
      title1: 'How many sticks did you smoke per day?',
      title3: 'How much did a pack of sticks cost?',
    },
    vape: {
      title1: 'How much money you spend on vape per week?',
    },
  }

  const [steps, setSteps] = useState([smokeSteps[smokeType][0]])

  const setSmoke = useUserStore((s) => s.setSmoke)

  const onSubmit = (data) => {
    if (steps.length !== smokeSteps[smokeType].length)
      return setSteps([...steps, smokeSteps[smokeType][steps.length]])
    setSmoke(data)
    navigation.navigate('SeventhPage')
  }

  return (
    <OnboardingLayout
      onPress={methods.handleSubmit(onSubmit)}
      isDisabled={!methods.formState.isValid}
    >
      <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
        <PageTracker />
        <FormProvider {...methods}>
          {steps.includes('howMany') && (
            <Input.Number
              title={inputContent[smokeType].title1}
              name="howMany"
              icon={smokeType === 'vape' && '$'}
              required
              step={smokeType === 'vape' ? 0.5 : 1}
              min={smokeType === 'vape' ? 0.1 : 1}
            />
          )}
          {steps.includes('inPack') && (
            <Input.Number
              title={inputContent[smokeType].title2}
              name="inPack"
              required
              step={1}
              min={methods.getValues('howMany')}
            />
          )}
          {steps.includes('packPrice') && (
            <Input.Number
              title={inputContent[smokeType].title3}
              icon={'$'}
              name="packPrice"
              required
              step={0.5}
              min={0.1}
            />
          )}
        </FormProvider>
      </Pressable>
    </OnboardingLayout>
  )
}
