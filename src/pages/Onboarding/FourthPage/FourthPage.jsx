import { useState } from 'react'
import { icons } from 'constants'
import { Controller, useForm } from 'react-hook-form'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import styles from './fourthPage.style'

export const FourthPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  const [selected, setSelected] = useState(undefined)
  const genders = {
    male: {
      icon: icons.male,
      label: 'Male',
    },
    female: {
      icon: icons.female,
      label: 'Female',
    },
    nonBinary: {
      icon: icons.nonBinary,
      label: 'Non-binary',
    },
  }

  return (
    <OnboardingLayout onPress={handleSubmit(onSubmit)}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Gender</Text>
        <Controller
          name="genders"
          control={control}
          rules={{
            required: 'Choose your gender',
          }}
          render={({ field: { onChange } }) => (
            <View style={styles.genders}>
              {Object.entries(genders).map(([key, gender]) => (
                <TouchableOpacity
                  key={key}
                  style={[styles.gender, selected === key && styles.active]}
                  onPress={() => (setSelected(key), onChange(key))}
                >
                  <Image style={styles.image} source={gender.icon} />
                  <Text style={styles.label}>{gender.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        />
        {errors.genders && <Text style={styles.error}>{errors.genders.message}</Text>}
      </View>
    </OnboardingLayout>
  )
}
