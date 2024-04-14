import { useState } from 'react'
import { icons } from 'constants'
import { Controller, useForm } from 'react-hook-form'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import styles from './fifthPage.style'

export const FifthPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  const [selected, setSelected] = useState(undefined)
  const smokes = {
    cigarettes: {
      icon: icons.cigarettes,
      label: 'Cigarettes',
    },
    iqos: {
      icon: icons.iqos,
      label: 'Iqos',
    },
    vape: {
      icon: icons.vape,
      label: 'Vape',
    },
  }

  return (
    <OnboardingLayout onPress={handleSubmit(onSubmit)}>
      <View style={styles.container}>
        <Text style={styles.title}>Choose what you smoke </Text>
        <Controller
          name="smokes"
          control={control}
          rules={{
            required: 'Choose what you smoke ',
          }}
          render={({ field: { onChange } }) => (
            <View style={styles.smokes}>
              {Object.entries(smokes).map(([key, smoke]) => (
                <TouchableOpacity
                  key={key}
                  style={[styles.smoke, selected === key && styles.active]}
                  onPress={() => (setSelected(key), onChange(key))}
                >
                  <Image style={styles.image} source={smoke.icon} />
                  <Text style={styles.label}>{smoke.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        />
        {errors.smokes && <Text style={styles.error}>{errors.smokes.message}</Text>}
      </View>
    </OnboardingLayout>
  )
}
